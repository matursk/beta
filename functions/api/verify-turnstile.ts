export interface Env {
  TURNSTILE_SECRET_KEY: string;
  MAILCHANNELS_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json();
    const token = body?.token as string | undefined;
    const email = body?.email as string | undefined;
    const name = body?.name as string | undefined;
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

    // Send emails via MailChannels API (authenticated with API key)
    if (email) {
      const from = "Matur Beta <no-reply@matur.sk>";
      const admin = "michael@matur.sk";
      const mailApiKey = context.env.MAILCHANNELS_API_KEY;
      if (!mailApiKey) {
        return new Response(JSON.stringify({ success: false, error: "Missing MAILCHANNELS_API_KEY env" }), { status: 400, headers: { "content-type": "application/json; charset=utf-8" } });
      }
      const send = async (to: string, subject: string, text: string, html: string) => {
        const headers: Record<string, string> = { "content-type": "application/json" };
        // Support both auth header styles
        if (mailApiKey) {
          headers["X-Api-Token"] = mailApiKey;
          headers["Authorization"] = `Bearer ${mailApiKey}`;
        }
        const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
          method: "POST",
          headers,
          body: JSON.stringify({
            personalizations: [{ to: [{ email: to }] }],
            from: { email: "no-reply@matur.sk", name: "Matur Beta" },
            subject,
            headers: { "Reply-To": "podpora@matur.sk" },
            content: [
              { type: "text/plain", value: text },
              { type: "text/html", value: html },
            ],
          }),
        });
        const bodyText = await res.text().catch(() => "");
        return { ok: res.ok, status: res.status, bodyText };
      };

      const userSubject = "Ďakujeme za prihlásenie do Matur Beta";
      const userText = `Ahoj ${name || ""},\n\nĎakujeme za prihlásenie. Ak ťa vyberieme, ozveme sa e‑mailom s odkazom na stiahnutie APK.\n\nTím Matur`;
      const userHtml = `<p>Ahoj ${name || ""},</p><p>Ďakujeme za prihlásenie. Ak ťa vyberieme, ozveme sa e‑mailom s odkazom na stiahnutie APK.</p><p>Tím Matur</p>`;

      const adminSubject = "Nová beta prihláška";
      const adminText = `Meno: ${name || "-"}\nEmail: ${email}`;
      const adminHtml = `<p>Meno: ${name || "-"}<br/>Email: ${email}</p>`;

      const [userRes, adminRes] = await Promise.all([
        send(email, userSubject, userText, userHtml),
        send(admin, adminSubject, adminText, adminHtml),
      ]);
      if (!userRes.ok || !adminRes.ok) {
        console.error("MailChannels error", { userRes, adminRes });
        // Best-effort: do not fail the request on email issues
      }
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e?.message || "error" }), { status: 200, headers: { "content-type": "application/json; charset=utf-8" } });
  }
};


