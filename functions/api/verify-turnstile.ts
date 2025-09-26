export interface Env {
  TURNSTILE_SECRET_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json();
    const token = body?.token as string | undefined;
    const email = body?.email as string | undefined;
    const name = body?.name as string | undefined;
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: "missing token" }), { status: 400 });
    }

    const secret = context.env.TURNSTILE_SECRET_KEY || "0x4AAAAAAB3eUsa9cKAgrr8W"; // fallback demo
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
      return new Response(JSON.stringify({ success: false, error: "turnstile" }), { status: 403 });
    }

    // Send emails via MailChannels (available on Cloudflare)
    if (email) {
      const from = "Matur Beta <no-reply@matur.sk>";
      const admin = "michael@matur.sk";
      const send = async (to: string, subject: string, text: string, html: string) => {
        await fetch("https://api.mailchannels.net/tx/v1/send", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: to }] }],
            from: { email: "no-reply@matur.sk", name: "Matur Beta" },
            subject,
            content: [
              { type: "text/plain", value: text },
              { type: "text/html", value: html },
            ],
          }),
        });
      };

      const userSubject = "Ďakujeme za prihlásenie do Matur Beta";
      const userText = `Ahoj ${name || ""},\n\nĎakujeme za prihlásenie. Ak ťa vyberieme, ozveme sa e‑mailom s odkazom na stiahnutie APK.\n\nTím Matur`;
      const userHtml = `<p>Ahoj ${name || ""},</p><p>Ďakujeme za prihlásenie. Ak ťa vyberieme, ozveme sa e‑mailom s odkazom na stiahnutie APK.</p><p>Tím Matur</p>`;

      const adminSubject = "Nová beta prihláška";
      const adminText = `Meno: ${name || "-"}\nEmail: ${email}`;
      const adminHtml = `<p>Meno: ${name || "-"}<br/>Email: ${email}</p>`;

      await Promise.all([
        send(email, userSubject, userText, userHtml),
        send(admin, adminSubject, adminText, adminHtml),
      ]);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e?.message || "error" }), { status: 500 });
  }
};


