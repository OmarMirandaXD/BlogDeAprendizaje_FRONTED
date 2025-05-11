import React from "react";

const PublicacionesFiltro = ({ filtro, setFiltro }) => {
  return (
    <div className="publicaciones-filtro">
      <select
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="filtro-select"
      >
        <option value="">Todos los cursos</option>
        <option value="Taller">Taller</option>
        <option value="Practicas">Prácticas</option>
        <option value="Tecnologia">Tecnología</option>
      </select>
    </div>
  );
};

export default PublicacionesFiltro;