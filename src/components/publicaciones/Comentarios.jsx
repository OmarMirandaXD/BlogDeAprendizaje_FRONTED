import React, { useState } from "react";

const Comentarios = ({ comentarios, onAgregarComentario }) => {
  const [nombre, setNombre] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() && contenido.trim()) {
      onAgregarComentario({ autor: nombre, contenido });
      setNombre("");
      setContenido("");
    }
  };

  return (
    <div className="comentarios">
      <h3>Comentarios</h3>
      <ul>
  {console.log("Comentarios renderizados:", comentarios)}
  {Array.isArray(comentarios) &&
    comentarios.map((comentario) => (
      <li key={comentario.uid || comentario._id}>
        <strong>{comentario.autor || "Anónimo"}:</strong> {comentario.contenido}
      </li>
    ))}
</ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          required
        />
        <input
          type="text"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Escribe un comentario..."
          required
        />
        <button type="submit">Agregar Comentario</button>
      </form>
    </div>
  );
};

export default Comentarios;