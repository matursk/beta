import React from "react";

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export default function PlatformNotice() {
  const ios = isIOS();
  if (!ios) return null;
  return (
    <div className="alert alert-warning shadow-sm">
      <span>
        Momentálne podporujeme len Android. Aplikáciu distribuujeme iba ako APK a
        zatiaľ nie sme na Google Play ani v App Store, preto iOS nie je podporovaný.
      </span>
    </div>
  );
}


