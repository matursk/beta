import React from "react";
import CbetaLayout from "./Layout";
import CbetaGuard from "./Guard";
import { signOut } from "firebase/auth";
import { cbetaAuth } from "./firebaseApp";

export default function CbetaDashboard() {
  return (
    <CbetaGuard>
      <CbetaLayout>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">CBETA prehľad</h1>
          <button className="btn btn-outline btn-sm" onClick={() => signOut(cbetaAuth)}>Odhlásiť</button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Stiahnutie APK</h2>
              <p>Tu bude odkaz na najnovší build aplikácie pre uzavretú betu.</p>
              <a className="btn btn-primary" href="#" aria-disabled>Čoskoro dostupné</a>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Podmienky CBETA</h2>
              <p>Pred používaním si prosím prečítaj podmienky.</p>
              <a className="btn" href="/cbeta/tos">Zobraziť podmienky</a>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Nahlásiť chybu</h2>
              <p>Otvor bug konzolu a pošli nám hlásenie.</p>
              <a className="btn" href="https://bugs.matur.sk" target="_blank" rel="noreferrer">Prejsť na bugs.matur.sk</a>
            </div>
          </div>
        </div>
      </CbetaLayout>
    </CbetaGuard>
  );
}


