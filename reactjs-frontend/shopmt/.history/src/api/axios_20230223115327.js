import axios from 'axios';
import { useRefreshToken } from '../hooks';
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
axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = await useRefreshToken();
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    },
);
export { axiosPrivate };
