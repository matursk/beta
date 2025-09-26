import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import Root from "./routes/Root";
import ThankYou from "./routes/ThankYou";
import Policy from "./routes/Policy";
import Beta from "./routes/Beta";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/beta", element: <Beta /> },
  { path: "/dakujeme", element: <ThankYou /> },
  { path: "/beta-policy", element: <Policy /> },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


