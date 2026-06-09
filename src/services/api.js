import axios from "axios";

const api = axios.create({
    baseURL: "http://178.238.237.71:3006",
});

export default api;