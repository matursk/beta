import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { isAllowedEmail } from "./allowlist";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../lib/firebase";

// Reuse the default app (no name) so auth state is shared across pages.
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function CbetaGuard({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = React.useState(true);
  const [ok, setOk] = React.useState(false);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
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
  if (!ok) return <Navigate to="/cbeta/login" replace />;
  return <>{children}</>;
}


