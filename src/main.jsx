import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { setServerUrl } from "./router";
import "./styles.css";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Built pages arrive prerendered (see scripts/prerender.js); the dev server
// sends an empty root.
if (root.hasChildNodes()) {
  setServerUrl(window.location.pathname);
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
