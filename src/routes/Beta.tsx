import React from "react";
import Navbar from "../components/Navbar";
import PlatformNotice from "../components/PlatformNotice";
import BetaForm from "../components/BetaForm";

export default function Beta() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="container mx-auto px-4 py-10 space-y-10">
        <section className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Prihláška do beta programu</h1>
          <p className="opacity-80">
            Vyplň krátky formulár. Ak ťa vyberieme, pošleme ti e‑mail s prístupom
            do Android bety.
          </p>
        </section>

        <section>
          <PlatformNotice />
          <div className="card bg-base-100 shadow mt-6">
            <div className="card-body">
              <BetaForm />
              <p className="text-xs opacity-70 mt-2">
                Odoslaním súhlasíš s <a className="link" href="/beta-policy">Beta policy</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


