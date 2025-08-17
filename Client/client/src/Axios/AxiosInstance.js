import axios from "axios";

const url=import.meta.env.VITE_BASE_URL
console.log("Full env:", import.meta.env);
console.log(url)
console.log("Base URL:", import.meta.env.VITE_BASE_URL)

const axiosinstance=axios.create({
    baseURL:url,
    withCredentials:true
})

export {axiosinstance}