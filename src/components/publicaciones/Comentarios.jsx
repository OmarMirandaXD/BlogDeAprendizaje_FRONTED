import React, { useState } from "react";

const Comentarios = ({ comentarios, onAgregarComentario, publicacion, ordenFecha, setOrdenFecha }) => {
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
      <div className="contenido-publicacion">
        <h2>{publicacion.titulo || "Sin título"}</h2>
        <p>
          <strong>Descripción:</strong> {publicacion.descripcion || "Sin descripción"}
        </p>
        <p>
          <strong>Categoría:</strong> {publicacion.curso || "Sin categoría"}
        </p>
        <p>
          <strong>Fecha de creación:</strong>{" "}
          {new Date(publicacion.fechaCreacion).toLocaleDateString() || "Fecha no disponible"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-agregar-comentario">
        <h3>Agregar un comentario</h3>
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

      {/* Filtro por fecha (funcional) */}
      <div className="comentarios-filtro">
        <h3>Ordenar comentarios</h3>
        <select
          value={ordenFecha}
          onChange={(e) => setOrdenFecha(e.target.value)}
          className="orden-select"
        >
          <option value="desc">Más recientes</option>
          <option value="asc">Más antiguos</option>
        </select>
      </div>

      <h3>Comentarios</h3>
      <ul>
        {Array.isArray(comentarios) &&
          comentarios.map((comentario) => (
            <li key={comentario._id}>
              <strong>{comentario.autor || "Anónimo"}:</strong> {comentario.contenido}
              <br />
              <small>
                {comentario.fechaCreacion
                  ? `Publicado el ${new Date(comentario.fechaCreacion).toLocaleDateString()}`
                  : "Fecha no disponible"}
              </small>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Comentarios;