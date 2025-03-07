import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Erro na resposta:", error.response.data);
    } else if (error.request) {
      console.error("Erro na requisição", error.request);
    } else {
      console.error("Erro:", error.message);
    }
    return Promise.reject(error);
  },
);
