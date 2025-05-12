import { useState } from "react";

const useComentariosFiltro = (comentarios) => {
  const [filtroCurso, setFiltroCurso] = useState("");
  const [ordenFecha, setOrdenFecha] = useState("desc");

  const comentariosFiltrados = comentarios
    .filter((comentario) =>
      filtroCurso === "" || comentario.curso === filtroCurso
    )
    .sort((a, b) => {
      const fechaA = new Date(a.fechaCreacion);
      const fechaB = new Date(b.fechaCreacion);
      return ordenFecha === "desc" ? fechaB - fechaA : fechaA - fechaB;
    });

  return { filtroCurso, setFiltroCurso, ordenFecha, setOrdenFecha, comentariosFiltrados };
};

export default useComentariosFiltro;