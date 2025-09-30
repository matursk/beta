export interface Env {
  TURNSTILE_SECRET_KEY: string;
  BREVO_API_KEY: string;
  BREVO_USER_TEMPLATE_ID?: string;
  BREVO_LIST_NAME?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json();
    const token = body?.token as string | undefined;
    const email = body?.email as string | undefined;
    const firstNameBody = body?.firstName as string | undefined;
    const lastNameBody = body?.lastName as string | undefined;
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: "missing token" }), { status: 400, headers: { "content-type": "application/json; charset=utf-8" } });
    }

    const secret = context.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      return new Response(JSON.stringify({ success: false, error: "Missing TURNSTILE_SECRET_KEY env" }), { status: 400, headers: { "content-type": "application/json; charset=utf-8" } });
    }
    const form = new FormData();
    form.append("secret", secret);
    form.append("response", token);
    form.append("remoteip", context.request.headers.get("CF-Connecting-IP") || "");

    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const verifyData = await verifyRes.json<any>();
    const ok = verifyData?.success === true;
    if (!ok) {
      return new Response(JSON.stringify({ success: false, error: "turnstile" }), { status: 403, headers: { "content-type": "application/json; charset=utf-8" } });
    }

    // Send emails via Brevo Transactional API and upsert contact to Brevo list
    if (email) {
      const admin = "michael@matur.sk";
      const send = async (to: string, subject: string, text: string, html: string, toName?: string) => {
        const apiKey = context.env.BREVO_API_KEY;
        if (!apiKey) {
          return { ok: false, status: 0, bodyText: "Missing BREVO_API_KEY" };
        }
        const res = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "api-key": apiKey,
          },
          body: JSON.stringify({
            sender: { email: "no-reply@matur.sk", name: "Matur Beta" },
            to: [{ email: to, name: toName || undefined }],
            subject,
            textContent: text,
            htmlContent: html,
            replyTo: { email: "podpora@matur.sk", name: "Podpora" },
            tags: ["beta"],
          }),
        });
        const bodyText = await res.text().catch(() => "");
        return { ok: res.ok, status: res.status, bodyText };
      };

      const sendWithTemplate = async (to: string, toName: string | undefined, templateId: number, params: Record<string, unknown>) => {
        const apiKey = context.env.BREVO_API_KEY;
        if (!apiKey) {
          return { ok: false, status: 0, bodyText: "Missing BREVO_API_KEY" };
        }
        const res = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "api-key": apiKey,
          },
          body: JSON.stringify({
            sender: { email: "no-reply@matur.sk", name: "Matur Beta" },
            to: [{ email: to, name: toName || undefined }],
            templateId,
            params,
            replyTo: { email: "podpora@matur.sk", name: "Podpora" },
            tags: ["beta"],
          }),
        });
        const bodyText = await res.text().catch(() => "");
        return { ok: res.ok, status: res.status, bodyText };
      };

      const ensureListAndUpsertContact = async (emailAddr: string, firstName?: string, lastName?: string) => {
        const apiKey = context.env.BREVO_API_KEY;
        if (!apiKey) return;
        const listName = (context.env.BREVO_LIST_NAME || "BETA").trim();
        let listId: number | null = null;
        try {
          const displayName = `${(firstName || "").trim()} ${(lastName || "").trim()}`.trim() || undefined;

          // Find existing lists
          const listRes = await fetch("https://api.brevo.com/v3/contacts/lists?limit=50&offset=0", {
            headers: { "accept": "application/json", "api-key": apiKey },
          });
          if (listRes.ok) {
            const data = await listRes.json().catch(() => null) as any;
            const lists = Array.isArray(data?.lists) ? data.lists : [];
            const found = lists.find((l: any) => (l?.name || "").toLowerCase() === listName.toLowerCase());
            if (found?.id) listId = Number(found.id);
          }
          // Create list if missing
          if (!listId) {
            const createRes = await fetch("https://api.brevo.com/v3/contacts/lists", {
              method: "POST",
              headers: { "content-type": "application/json", "accept": "application/json", "api-key": apiKey },
              body: JSON.stringify({ name: listName }),
            });
            if (createRes.ok) {
              const created = await createRes.json().catch(() => null) as any;
              if (created?.id) listId = Number(created.id);
            }
          }
          // Upsert contact and attach to the list
          if (listId) {
            await fetch("https://api.brevo.com/v3/contacts?updateEnabled=true", {
              method: "POST",
              headers: { "content-type": "application/json", "accept": "application/json", "api-key": apiKey },
              body: JSON.stringify({
                email: emailAddr,
                attributes: (firstName || lastName || displayName)
                  ? { FIRSTNAME: firstName || undefined, LASTNAME: lastName || undefined, NAME: displayName }
                  : undefined,
                listIds: [listId],
              }),
            });
          }
        } catch (e) {
          console.error("Brevo contacts error", e);
        }
      };

      const adminSubject = "Nová beta prihláška";
      const displayAdminName = `${(firstNameBody || "").trim()} ${(lastNameBody || "").trim()}`.trim() || "-";
      const adminText = `Meno: ${displayAdminName}\nEmail: ${email}`;
      const adminHtml = `<p>Meno: ${displayAdminName}<br/>Email: ${email}</p>`;

      // Upsert contact to Brevo list with FIRSTNAME/LASTNAME and await before sending
      try {
        await ensureListAndUpsertContact(email, firstNameBody || undefined, lastNameBody || undefined);
      } catch {
        // Proceed even if upsert fails, but we awaited to best ensure attributes exist
      }

      // If user template is configured, prefer sending via template
      const templateIdRaw = context.env.BREVO_USER_TEMPLATE_ID;
      const templateId = templateIdRaw ? Number(templateIdRaw) : NaN;
      const userSendPromise = Number.isFinite(templateId)
        // Send using template relying solely on contact attributes (no params, no to.name)
        ? sendWithTemplate(email, undefined, templateId, undefined as any)
        // No text/html fallback: if template is not configured, skip user send
        : Promise.resolve({ ok: true, status: 0, bodyText: "Skipped user email: template not configured" });

      const [userRes, adminRes] = await Promise.all([
        userSendPromise,
        send(admin, adminSubject, adminText, adminHtml, "Admin"),
      ]);
      if (!userRes.ok || !adminRes.ok) {
        console.error("Brevo error", { userRes, adminRes });
        // Best-effort: do not fail the request on email issues
      }
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e?.message || "error" }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
  }
};


