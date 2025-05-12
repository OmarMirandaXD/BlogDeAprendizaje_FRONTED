import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useComentarios from "../../shared/hook/useComentarios";
import useComentariosFiltro from "../../shared/hook/useComentariosFiltro";
import Comentarios from "../../components/publicaciones/Comentarios";
import Nadvar from "../../components/nadvar/Nadvar";
import { listarPublicaciones } from "../../services/api";
import "../../pages/publicaciones/Publicaciones.css"; 

const ComentariosPage = () => {
  const { id } = useParams();
  const [publicacion, setPublicacion] = useState(null);
  const { comentarios, loading, error, agregarComentario } = useComentarios(id);
  const {
    ordenFecha,
    setOrdenFecha,
    comentariosFiltrados,
  } = useComentariosFiltro(comentarios);

  useEffect(() => {
    const fetchPublicacion = async () => {
      try {
        const data = await listarPublicaciones();
        if (data?.success && Array.isArray(data.publicaciones)) {
          const pub = data.publicaciones.find((pub) => pub._id === id);
          setPublicacion(pub);
        } else {
          console.error("Respuesta inesperada:", data);
        }
      } catch (e) {
        console.error("Error al obtener la publicación:", e);
      }
    };

    fetchPublicacion();
  }, [id]);

  if (loading) return <p>Cargando comentarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Nadvar />
      <h2>Comentarios de la Publicación</h2>
      {publicacion ? (
        <Comentarios
          comentarios={comentariosFiltrados}
          onAgregarComentario={agregarComentario}
          publicacion={publicacion}
          ordenFecha={ordenFecha}
          setOrdenFecha={setOrdenFecha}
        />
      ) : (
        <p>Publicación no encontrada.</p>
      )}
    </div>
  );
};

export default ComentariosPage;