// ── src/main.jsx ───────────────────────────────────────────────────────────
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import bgPattern from "./assets/Website Background.png";

// inject brand background as CSS variable globally
document.documentElement.style.setProperty("--site-bg", `url('${bgPattern}')`);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);