import React from "react";
import { Link } from "react-router-dom";

export default function CbetaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-base-100">
      <header className="bg-base-100 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/transparent-logo.png" alt="Matur" className="h-8 w-8" />
              <span className="text-lg font-semibold">Matur CBETA</span>
            </Link>
            <nav className="ml-auto flex items-center gap-2">
              <Link to="/cbeta" className="btn btn-ghost btn-sm">Prehľad</Link>
              <Link to="/cbeta/tos" className="btn btn-ghost btn-sm">Podmienky</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}


