import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GuestProvider } from "./src/context/GuestContext.jsx";
import { AuthProvider } from "./src/context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <GuestProvider>
        <App />
      </GuestProvider>
    </AuthProvider>
  </React.StrictMode>
);
