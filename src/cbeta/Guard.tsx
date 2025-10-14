import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxvhTuQhfKeIgybiRQoca7btPdSO5oFag",
  authDomain: "matur-3f6cc.firebaseapp.com",
  projectId: "matur-3f6cc",
  storageBucket: "matur-3f6cc.firebasestorage.app",
  messagingSenderId: "624068510753",
  appId: "1:624068510753:web:91c0d1343b1b9687c08f60",
  measurementId: "G-RFNRJCQDGB",
};

const app = initializeApp(firebaseConfig, "cbeta");
const auth = getAuth(app);

const ALLOWLIST = new Set([
  "evkajak1042@gmail.com",
  "bastek.andrej@gmail.com",
  "dany.kulich@gmail.com",
  "lukasryljak123@gmail.com",
  "pavelvisocoi895@gmail.com",
  "martinstrasik000@gmail.com",
  "velkapica339@gmail.com",
  "diana.senasiova@gmail.com",
  // Admins
  "admin@matur.sk",
  "michaelchobot.dev@gmail.com",
  "marek@matur.sk",
  "michael@matur.sk",
]);

export default function CbetaGuard({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = React.useState(true);
  const [ok, setOk] = React.useState(false);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const email = (user?.email || "").toLowerCase();
      setOk(!!user && ALLOWLIST.has(email));
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


