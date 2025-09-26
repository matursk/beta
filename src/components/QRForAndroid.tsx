import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QRForAndroid({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, url, { width: 160 });
  }, [url]);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <canvas ref={canvasRef} className="rounded bg-white p-1 w-40 max-w-full h-auto" />
      <div className="text-sm opacity-80">Naskenuj QR kód v Androide</div>
    </div>
  );
}


