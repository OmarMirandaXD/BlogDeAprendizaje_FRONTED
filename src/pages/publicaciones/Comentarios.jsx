import React from "react";
import { useParams } from "react-router-dom";
import useComentarios from "../../shared/hook/useComentarios";
import Comentarios from "../../components/publicaciones/Comentarios";
import Nadvar from "../../components/nadvar/Nadvar";

const ComentariosPage = () => {
  const { id } = useParams();
  console.log("ID de la publicación:", id);

  const { comentarios, loading, error, agregarComentario } = useComentarios(id);

  if (loading) return <p>Cargando comentarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Nadvar />
      <h2>Comentarios de la Publicación</h2>
      <Comentarios
        comentarios={comentarios}
        onAgregarComentario={agregarComentario}
      />
    </div>
  );
};

export default ComentariosPage;