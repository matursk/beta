import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CbetaLayout from "./Layout";

const firebaseConfig = {
  apiKey: "AIzaSyBxvhTuQhfKeIgybiRQoca7btPdSO5oFag",
  authDomain: "matur-3f6cc.firebaseapp.com",
  projectId: "matur-3f6cc",
  storageBucket: "matur-3f6cc.firebasestorage.app",
  messagingSenderId: "624068510753",
  appId: "1:624068510753:web:91c0d1343b1b9687c08f60",
  measurementId: "G-RFNRJCQDGB",
};

const app = initializeApp(firebaseConfig, "cbeta-login");
const auth = getAuth(app);

export default function CbetaLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.assign("/cbeta");
    } catch (e: any) {
      setError(e?.message || "Prihlásenie zlyhalo");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <CbetaLayout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Prihlásenie</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label"><span className="label-text">E‑mail</span></label>
            <input className="input input-bordered" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Heslo</span></label>
            <input className="input input-bordered" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <div className="alert alert-error">{error}</div>}
          <button className="btn btn-primary w-full" disabled={submitting}>
            {submitting ? "Prihlasujem…" : "Prihlásiť sa"}
          </button>
        </form>
        <p className="mt-3 text-sm">
          Nemáš účet? <a className="link" href="/cbeta/signup">Vytvor si ho</a>
        </p>
      </div>
    </CbetaLayout>
  );
}


