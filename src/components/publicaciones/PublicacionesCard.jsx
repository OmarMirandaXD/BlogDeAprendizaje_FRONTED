import React from "react";
import { useNavigate } from "react-router-dom";

const PublicacionesCard = ({ publicacion }) => {
  const navigate = useNavigate();

  const handleComentariosClick = () => {
    if (publicacion._id) {
      navigate(`/comentarios/${publicacion._id}`);
    } else {
      console.error("El ID de la publicación no está definido.");
    }
  };

  return (
    <div className="publicacion-card">
      <h2>{publicacion.titulo || "Sin título"}</h2>
      <p>{publicacion.descripcion || "Sin descripción"}</p>
      <p className="publicacion-categoria">
        <strong>Categoría:</strong> {publicacion.curso || "Sin categoría"}
      </p>
      <p className="publicacion-fecha">
        <strong>Fecha de publicación:</strong>{" "}
        {new Date(publicacion.fechaCreacion).toLocaleDateString() || "Fecha no disponible"}
      </p>
      <button onClick={handleComentariosClick} className="btn-comentarios">
        Ver y Agregar Comentarios
      </button>
    </div>
  );
};

export default PublicacionesCard;