import { useState } from "react";

const usePublicacionesFiltro = (publicaciones) => {
  const [filtro, setFiltro] = useState("");
  const publicacionesFiltradas = publicaciones.filter((publicacion) =>
    filtro === "" || publicacion.curso === filtro
  );

  return { filtro, setFiltro, publicacionesFiltradas };
};

export default usePublicacionesFiltro;