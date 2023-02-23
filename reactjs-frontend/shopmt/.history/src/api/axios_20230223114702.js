import axios from 'axios';
import { useAuth } from '../hooks';
import useRefreshToken from '../hooks';
const BASE_URL = 'http://localhost:8081';

export default axios.create({
    baseURL: BASE_URL,
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});
axiosPrivate.interceptors.request.use(
    (config) => {
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);
