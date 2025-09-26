import React from "react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-3xl font-bold">Ďakujeme za prihlásenie!</h1>
        <p>
          Ak ťa vyberieme, ozveme sa e‑mailom s ďalšími krokmi a odkazom na
          stiahnutie APK. Sledovať nás môžeš aj na sociálnych sieťach.
        </p>
        <a href="/" className="btn btn-primary">Späť na úvod</a>
      </div>
    </div>
  );
}


