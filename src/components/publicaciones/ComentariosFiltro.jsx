import React from "react";

const ComentariosFiltro = ({ filtroCurso, setFiltroCurso, ordenFecha, setOrdenFecha }) => {
  return (
    <div className="comentarios-filtro">

      <select
        value={ordenFecha}
        onChange={(e) => setOrdenFecha(e.target.value)}
        className="orden-select"
      >
        <option value="desc">Más recientes</option>
        <option value="asc">Más antiguos</option>
      </select>
    </div>
  );
};

export default ComentariosFiltro;