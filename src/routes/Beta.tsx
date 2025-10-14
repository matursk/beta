import React from "react";
import Navbar from "../components/Navbar";
import PlatformNotice from "../components/PlatformNotice";

export default function Beta() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="container mx-auto px-4 py-10 space-y-10">
        <section className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Prihláška do beta programu</h1>
          <div className="alert alert-info">
            Uzavreli sme prihlasovanie do uzavretej bety a pripravujeme jej distribúciu.
          </div>
          <p className="opacity-80 mt-3">
            Ak si sa prihlásil/a, čoskoro sa ozveme e‑mailom s ďalšími krokmi.
          </p>
        </section>

        <section>
          <PlatformNotice />
          <div className="card bg-base-100 shadow mt-6">
            <div className="card-body">
              <h2 className="card-title">Ďalšie kroky</h2>
              <p>
                Distribúciu uzavretej bety pripravujeme. Pošleme ti e‑mail s odkazom na stiahnutie APK a
                inštrukciami hneď, ako bude k dispozícii.
              </p>
              <p className="text-xs opacity-70 mt-2">
                Viac o spracúvaní údajov nájdeš v <a className="link" href="/beta-policy">Beta policy</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


