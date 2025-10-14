import React, { useEffect, useMemo, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { cbetaAuth } from "./firebaseApp";
import CbetaLayout from "./Layout";
import { isAllowedEmail } from "./allowlist";

const auth = cbetaAuth;

export default function CbetaSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState<string | null>(null);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const e = (sp.get("email") || "").trim();
    if (e) {
      setInviteEmail(e);
      setEmail(e);
    }
  }, []);

  const passwordChecks = useMemo(() => {
    const lengthOk = password.length >= 12;
    const upperOk = /[A-Z]/.test(password);
    const lowerOk = /[a-z]/.test(password);
    const digitOk = /\d/.test(password);
    const symbolOk = /[^A-Za-z0-9]/.test(password);
    const allOk = lengthOk && upperOk && lowerOk && digitOk && symbolOk;
    return { lengthOk, upperOk, lowerOk, digitOk, symbolOk, allOk };
  }, [password]);

  const canSignUp = inviteEmail !== null && isAllowedEmail(inviteEmail);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      if (!inviteEmail) {
        throw new Error("Registrácia je dostupná iba cez pozvánku.");
      }
      if (!isAllowedEmail(inviteEmail)) {
        throw new Error("Tento e‑mail nemá prístup do uzavretej CBETA.");
      }
      if (!passwordChecks.allOk) {
        throw new Error("Zadaj silné heslo (min. 12 znakov, veľké/malé písmená, číslo a symbol)");
      }
      await createUserWithEmailAndPassword(auth, inviteEmail, password);
      window.location.assign("/cbeta");
    } catch (e: any) {
      setError(e?.message || "Registrácia zlyhala");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <CbetaLayout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Registrácia</h1>
        {!inviteEmail && (
          <div className="card bg-base-100 shadow">
            <div className="card-body space-y-2">
              <h2 className="card-title">Iba na pozvánku</h2>
              <p>Registrácia je dostupná len cez pozývací odkaz s tvojím e‑mailom.</p>
              <a className="btn" href="/cbeta/login">Prejsť na prihlásenie</a>
            </div>
          </div>
        )}
        {inviteEmail && !canSignUp && (
          <div className="card bg-base-100 shadow">
            <div className="card-body space-y-2">
              <h2 className="card-title">Prístup zamietnutý</h2>
              <p>E‑mail <strong>{inviteEmail}</strong> nie je v povolenom zozname pre uzavretú CBETA.</p>
              <a className="btn" href="/cbeta/login">Prihlásiť sa iným účtom</a>
            </div>
          </div>
        )}
        {inviteEmail && canSignUp && (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="alert">
              Registruješ sa ako <strong>{inviteEmail}</strong>.
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Heslo</span></label>
              <input className="input input-bordered" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <label className="label">
                <span className="label-text-alt">
                  Heslo musí obsahovať: {" "}
                  <span className={passwordChecks.lengthOk ? "text-success" : "text-error"}>12+ znakov</span>, {" "}
                  <span className={passwordChecks.upperOk ? "text-success" : "text-error"}>veľké</span>, {" "}
                  <span className={passwordChecks.lowerOk ? "text-success" : "text-error"}>malé</span>, {" "}
                  <span className={passwordChecks.digitOk ? "text-success" : "text-error"}>číslo</span>, {" "}
                  <span className={passwordChecks.symbolOk ? "text-success" : "text-error"}>symbol</span>
                </span>
              </label>
            </div>
            {error && <div className="alert alert-error">{error}</div>}
            <button className="btn btn-primary w-full" disabled={submitting || !passwordChecks.allOk}>
              {submitting ? "Registrujem…" : "Vytvoriť účet"}
            </button>
          </form>
        )}
      </div>
    </CbetaLayout>
  );
}


