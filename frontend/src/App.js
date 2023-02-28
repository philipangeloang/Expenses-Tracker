import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotAuthenticated from "./pages/NotAuthenticated";
import { useAuthContext } from "./hooks/useAuthContext";
import Authenticated from "./pages/Authenticated";

export default function App() {
  const { user } = useAuthContext();
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Authenticated /> : <NotAuthenticated />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
