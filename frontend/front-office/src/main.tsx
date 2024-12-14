import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <div style={{ backgroundColor: "#0fdd6c" }}>
    <StrictMode>
      <App />
    </StrictMode>
  </div>
);
