import axios from "axios";

const key = import.meta.env.VITE_RAPIDAPI_KEY

const http = axios.create({
  baseURL: "https://mmo-games.p.rapidapi.com",
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  }
})

export default http