import axios from 'axios';

const ip = 'localhost';
export const api = axios.create({
    baseURL: `http://${ip}:8081/`,
});
