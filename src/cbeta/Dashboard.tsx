import React from "react";
import CbetaLayout from "./Layout";
import CbetaGuard from "./Guard";
import { signOut } from "firebase/auth";
import { cbetaAuth } from "./firebaseApp";
import QRForAndroid from "../components/QRForAndroid";

export default function CbetaDashboard() {
  const isProbablyMobile = (() => {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent || navigator.vendor || "";
    return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(ua);
  })();

  const enrollUrl = "https://appdistribution.firebase.dev/i/416cbe715cbce17f";

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
              {isProbablyMobile ? (
                <>
                  <p>Registrácia a stiahnutie cez Firebase App Distribution.</p>
                  <a className="btn btn-primary" href={enrollUrl} target="_blank" rel="noreferrer">
                    Otvoriť download/enroll
                  </a>
                </>
              ) : (
                <>
                  <p>Otvor túto stránku v Androide alebo naskenuj QR kód na mobile:</p>
                  <QRForAndroid url={enrollUrl} />
                </>
              )}
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
              <h2 className="card-title">Bug konzola</h2>
              <p>Uplatni si odmenu za chyby nahlásené priamo v appke a skontroluj stav nahlásení.</p>
              <a className="btn" href="https://bugs.matur.sk" target="_blank" rel="noreferrer">Prejsť na bugs.matur.sk</a>
            </div>
          </div>
        </div>
      </CbetaLayout>
    </CbetaGuard>
  );
}


