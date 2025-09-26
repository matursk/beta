import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/transparent-logo.png" alt="Matur" className="h-10 w-10" />
            <span className="text-xl font-semibold">Matur</span>
          </Link>
          <nav className="ml-auto flex items-center gap-3">
            <Link
              to="/"
              className={`btn btn-ghost btn-md ${isActive("/") ? "btn-active" : ""}`}
            >
              Domov
            </Link>
            <Link
              to="/beta-policy"
              className={`btn btn-ghost btn-md ${isActive("/beta-policy") ? "btn-active" : ""}`}
            >
              Beta policy
            </Link>
            <Link to="/beta" className="btn btn-md btn-primary">
              Chcem do bety
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


