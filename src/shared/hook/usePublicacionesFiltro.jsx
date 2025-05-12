import { useState } from "react";

const usePublicacionesFiltro = (publicaciones) => {
  const [filtro, setFiltro] = useState("");
  const [ordenFecha, setOrdenFecha] = useState("desc"); 

  const publicacionesFiltradas = publicaciones
    .filter((publicacion) => filtro === "" || publicacion.curso === filtro)
    .sort((a, b) => {
      const fechaA = new Date(a.fechaCreacion);
      const fechaB = new Date(b.fechaCreacion);
      return ordenFecha === "desc" ? fechaB - fechaA : fechaA - fechaB;
    });

  return { filtro, setFiltro, ordenFecha, setOrdenFecha, publicacionesFiltradas };
};

export default usePublicacionesFiltro;