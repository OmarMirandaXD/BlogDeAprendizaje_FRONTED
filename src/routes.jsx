import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Publicaciones from "./pages/publicaciones/Publicaciones";
import ComentariosPage from "./pages/publicaciones/Comentarios";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Publicaciones />} />
        <Route path="/comentarios/:id" element={<ComentariosPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;