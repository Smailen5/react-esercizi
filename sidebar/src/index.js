import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
