import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/transparent-logo.png" alt="Matur" className="h-10 w-10" />
            <span className="text-xl font-semibold">Matur</span>
          </Link>
          <button
            type="button"
            className="ml-auto md:hidden btn btn-ghost btn-square"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <nav className="ml-auto hidden md:flex items-center gap-3">
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
            <Link
              to="/cbeta-tos"
              className={`btn btn-ghost btn-md ${isActive("/cbeta-tos") ? "btn-active" : ""}`}
            >
              CBETA podmienky
            </Link>
            <Link to="/beta" className="btn btn-md btn-primary">
              Chcem do bety
            </Link>
          </nav>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <nav className="py-2 flex flex-col gap-2">
              <Link
                to="/"
                className={`btn btn-ghost justify-start ${isActive("/") ? "btn-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                Domov
              </Link>
              <Link
                to="/beta-policy"
                className={`btn btn-ghost justify-start ${isActive("/beta-policy") ? "btn-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                Beta policy
              </Link>
              <Link
                to="/cbeta-tos"
                className={`btn btn-ghost justify-start ${isActive("/cbeta-tos") ? "btn-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                CBETA podmienky
              </Link>
              <Link
                to="/beta"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                Chcem do bety
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


