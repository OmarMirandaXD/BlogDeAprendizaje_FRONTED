import React, { useEffect, useState } from "react";
import { listarPublicaciones } from "../../services/api";
import PublicacionesCard from "../../components/publicaciones/PublicacionesCard";
import PublicacionesFiltro from "../../components/publicaciones/PublicacionesFiltro";
import usePublicacionesFiltro from "../../shared/hook/usePublicacionesFiltro";
import SearchAppBar from "../../components/nadvar/Nadvar";
import "../../pages/publicaciones/Publicaciones.css"; 

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const { filtro, setFiltro, ordenFecha, setOrdenFecha, publicacionesFiltradas } =
    usePublicacionesFiltro(publicaciones);

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
      <SearchAppBar />
      <div className="publicaciones-container">
        
        <PublicacionesFiltro
          filtro={filtro}
          setFiltro={setFiltro}
          ordenFecha={ordenFecha}
          setOrdenFecha={setOrdenFecha}
        />
        <div className="publicaciones-list">
          {Array.isArray(publicacionesFiltradas) &&
            publicacionesFiltradas.map((publicacion) => (
              <PublicacionesCard key={publicacion._id} publicacion={publicacion} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Publicaciones;