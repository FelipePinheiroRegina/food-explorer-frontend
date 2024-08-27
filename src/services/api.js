import axios from "axios"

export const api = axios.create({
    baseURL: "https://food-explorer-backend-6ubf.onrender.com",
    //withCredentials: true para o uso de cookies
})