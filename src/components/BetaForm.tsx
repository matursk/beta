import React, { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

type FormState = {
  fullName: string;
  email: string;
  school: string;
  grade: string;
  city: string;
  deviceModel?: string;
  os?: string;
  subjects?: string;
  reason?: string;
  marketingOptIn: boolean;
  turnstileToken?: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  school: "",
  grade: "",
  city: "",
  deviceModel: "",
  os: "Android",
  subjects: "",
  reason: "",
  marketingOptIn: false,
};

export default function BetaForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Cloudflare Turnstile
  useEffect(() => {
    const scriptId = "turnstile-script";
    if (document.getElementById(scriptId)) return;
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const token = (window as any).turnstile?.getResponse?.();
      if (!token) throw new Error("Overenie robota zlyhalo. Skús znova.");

      const payload = { ...state, turnstileToken: token, createdAt: serverTimestamp() };

      // Verify Turnstile on Cloudflare function and send emails
      const verifyRes = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, email: state.email, name: state.fullName }),
      });
      const contentType = verifyRes.headers.get("content-type") || "";
      let verifyJson: any = null;
      if (contentType.includes("application/json")) {
        verifyJson = await verifyRes.json().catch(() => null);
      } else {
        const text = await verifyRes.text().catch(() => "");
        throw new Error(text || "Server vrátil neplatnú odpoveď.");
      }
      if (!verifyRes.ok || !verifyJson?.success) {
        const serverMessage = verifyJson?.error || verifyJson?.message;
        throw new Error(serverMessage || "Nepodarilo sa overiť ochranu proti spamu.");
      }

      await addDoc(collection(db, "beta_signups"), payload);

      // Reset Turnstile widget if available
      (window as any).turnstile?.reset?.();

      window.location.assign("/dakujeme");
    } catch (err: any) {
      setError(err.message ?? "Nastala chyba. Skúste to neskôr.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Meno a priezvisko <span className="text-error">*</span></span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="napr. Ján Novák"
            required
            value={state.fullName}
            onChange={(e) => setState({ ...state, fullName: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">E‑mail <span className="text-error">*</span></span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="napr. jan.novak@example.com"
            required
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Škola <span className="text-error">*</span></span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="napr. Gymnázium J. A. Komenského"
            required
            value={state.school}
            onChange={(e) => setState({ ...state, school: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ročník <span className="text-error">*</span></span>
          </label>
          <select
            className="select select-bordered w-full"
            required
            value={state.grade}
            onChange={(e) => setState({ ...state, grade: e.target.value })}
          >
            <option value="" disabled hidden>Vyber ročník</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mesto / Kraj <span className="text-error">*</span></span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="napr. Bratislava"
            required
            value={state.city}
            onChange={(e) => setState({ ...state, city: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Model zariadenia</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="napr. Samsung Galaxy A54"
            value={state.deviceModel}
            onChange={(e) => setState({ ...state, deviceModel: e.target.value })}
          />
          <label className="label">
            <span className="label-text-alt">iOS v bete zatiaľ nepodporujeme</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Operačný systém</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={state.os}
            onChange={(e) => setState({ ...state, os: e.target.value })}
          >
            <option>Android</option>
            <option>iOS</option>
            <option>Iné</option>
          </select>
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Predmet(y) maturít <span className="opacity-60">(voliteľné)</span></span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="napr. Slovenský jazyk, Matematika"
          value={state.subjects}
          onChange={(e) => setState({ ...state, subjects: e.target.value })}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Dôvod záujmu <span className="opacity-60">(voliteľné)</span></span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full"
          rows={3}
          placeholder="Stručne, prečo chceš do bety"
          value={state.reason}
          onChange={(e) => setState({ ...state, reason: e.target.value })}
        />
      </div>

      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            className="checkbox"
            checked={state.marketingOptIn}
            onChange={(e) => setState({ ...state, marketingOptIn: e.target.checked })}
          />
          <span className="label-text">Chcem dostávať novinky o Matur <span className="opacity-60">(voliteľné)</span></span>
        </label>
      </div>

      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAAB3eUsa9cKAgrr8W"
        data-theme="light"
      ></div>

      {error && <div className="alert alert-error">{error}</div>}

      <button className="btn btn-primary w-full md:w-auto" disabled={submitting} type="submit">
        {submitting ? "Odosielam…" : "Požiadať o prístup"}
      </button>
    </form>
  );
}


