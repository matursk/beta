import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import Root from "./routes/Root";
import ThankYou from "./routes/ThankYou";
import Policy from "./routes/Policy";
import Beta from "./routes/Beta";
import CbetaTos from "./routes/CbetaTos";
import CbetaDashboard from "./cbeta/Dashboard";
import CbetaLogin from "./cbeta/Login";
import CbetaSignup from "./cbeta/Signup";
import CbetaTosPage from "./cbeta/Tos";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/beta", element: <Beta /> },
  { path: "/dakujeme", element: <ThankYou /> },
  { path: "/beta-policy", element: <Policy /> },
  { path: "/cbeta-tos", element: <CbetaTos /> },
  { path: "/cbeta", element: <CbetaDashboard /> },
  { path: "/cbeta/login", element: <CbetaLogin /> },
  { path: "/cbeta/signup", element: <CbetaSignup /> },
  { path: "/cbeta/tos", element: <CbetaTosPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


