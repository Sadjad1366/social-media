import axios from "axios";

const baseURL = 'https://dummyjson.com'

const client = axios.create({
    baseURL: baseURL,
    timeout: 1000
})

export default client;