import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ItemContextProvider } from "./context/ItemContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ItemContextProvider>
      <App />
    </ItemContextProvider>
  </AuthContextProvider>
);
