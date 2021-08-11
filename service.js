import axios from "axios";

const api = axios.create({
  baseURL: "https://checkkm.com.br",
});

export default api;