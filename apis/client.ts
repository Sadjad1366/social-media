import axios from "axios";

const BASE_URL = 'https://dummyjson.com'

export const client = axios.create({
    baseURL:BASE_URL,
    timeout: 1000
});