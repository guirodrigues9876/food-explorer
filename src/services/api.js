import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-api-t6ho.onrender.com"
});
