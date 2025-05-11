import React, { useEffect, useState } from "react";
import { listarPublicaciones } from "../../services/api";
import PublicacionesCard from "../../components/publicaciones/PublicacionesCard";
import usePublicacionesFiltro from "../../shared/hook/usePublicacionesFiltro";
import SearchAppBar from "../../components/nadvar/Nadvar";

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const { filtro, setFiltro, publicacionesFiltradas } = usePublicacionesFiltro(publicaciones);

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const data = await listarPublicaciones();
        if (data?.success && Array.isArray(data.publicaciones)) {
          setPublicaciones(data.publicaciones);
        } else {
          console.error("Respuesta inesperada:", data);
        }
      } catch (error) {
        console.error("Error al obtener publicaciones:", error?.message || error);
      }
    };

    fetchPublicaciones();
  }, []);

  return (
    <>
      <SearchAppBar filtro={filtro} setFiltro={setFiltro} />
      <div className="publicaciones-list">
        {Array.isArray(publicacionesFiltradas) &&
          publicacionesFiltradas.map((publicacion) => (
            <PublicacionesCard key={publicacion._id} publicacion={publicacion} />
          ))}
      </div>
    </>
  );
};

export default Publicaciones;