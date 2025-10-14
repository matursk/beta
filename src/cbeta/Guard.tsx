import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { isAllowedEmail } from "./allowlist";
import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "../lib/firebase";

// Ensure single shared app instance
const app = (getApps()[0] || initializeApp(firebaseConfig));
const auth = getAuth(app);

export default function CbetaGuard({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = React.useState(true);
  const [ok, setOk] = React.useState(false);
  const [hasUser, setHasUser] = React.useState(false);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setHasUser(!!user);
      setOk(!!user && isAllowedEmail(user?.email || null));
      setChecking(false);
    });
    return () => unsub();
  }, []);

  if (checking) {
    return (
      <div className="min-h-[40vh] grid place-items-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }
  if (!ok) {
    if (!hasUser) return <Navigate to="/cbeta/login" replace />;
    return (
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-16 max-w-lg">
          <div className="card bg-base-100 shadow">
            <div className="card-body space-y-2">
              <h2 className="card-title">Prístup zamietnutý</h2>
              <p>Tento účet nemá prístup do uzavretej CBETA. Skús sa prihlásiť iným e‑mailom.</p>
              <div className="pt-2">
                <button className="btn" onClick={() => signOut(auth)}>Odhlásiť sa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}


