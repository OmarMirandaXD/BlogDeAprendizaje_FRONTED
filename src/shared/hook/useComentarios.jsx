import { useState, useEffect } from "react";
import { listarComentarios, crearComentario } from "../../services/api";

const useComentarios = (publicacionId) => {
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComentarios = async () => {
      setLoading(true);
      try {
        const data = await listarComentarios(publicacionId);
        setComentarios(Array.isArray(data) ? data : []);
      } catch (e) {
        setError("Error al cargar los comentarios. Intenta nuevamente.");
        console.error("Error al listar comentarios:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchComentarios();
  }, [publicacionId]);

  const agregarComentario = async (comentario) => {
    try {
      const comentarioCompleto = { ...comentario, publicacion: publicacionId };
      console.log("Enviando comentario:", comentarioCompleto);

      const nuevoComentario = await crearComentario(comentarioCompleto);

      if (nuevoComentario && typeof nuevoComentario === "object") {
        setComentarios((prev) =>
          Array.isArray(prev) ? [...prev, nuevoComentario] : [nuevoComentario]
        );
      } else {
        throw new Error("El servidor devolvió una respuesta inválida.");
      }
    } catch (e) {
      setError("No se pudo agregar el comentario. Intenta nuevamente.");
      console.error("Error al crear comentario:", e);
    }
  };

  return { comentarios, loading, error, agregarComentario };
};

export default useComentarios;