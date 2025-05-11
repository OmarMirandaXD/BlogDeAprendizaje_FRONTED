import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:3001/blog",
  timeout: 3000
});

export const listarPublicaciones = async () => {
  try {
    const response = await apiClient.get("/publicaciones/listarPublicaciones");
    console.log("Respuesta de la API:", response.data);
    return response.data;
  } catch (e) {
    console.error("Error al listar publicaciones:", e);
    return { error: true, e };
  }
};

export const crearPublicacion = async (data) => {
  try {
    const response = await apiClient.post("/publicaciones/crearPublicacion", data);
    return response.data;
  } catch (e) {
    console.error("Error al crear publicación:", e);
    return { error: true, message: e.message };
  }
};

export const listarComentarios = async (publicacionId) => {
  try {
    const response = await apiClient.get(`/comentarios/listarComentarios/${publicacionId}`);
    return response.data.comentarios;
  } catch (e) {
    console.error("Error al listar comentarios:", e);
    throw e; 
  }
};

export const crearComentario = async (data) => {
  try {
    const response = await apiClient.post("/comentarios/crearComentario", data);
    return response.data;
  } catch (e) {
    console.error("Error al crear comentario:", e);
    return { error: true, message: e.message };
  }
};

export default apiClient;