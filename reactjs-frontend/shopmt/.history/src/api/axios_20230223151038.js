import axios from 'axios';
import { useRefreshToken } from '../hooks';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default axios.create({
    baseURL: BASE_URL,
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
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
            localStorage.setItem('token', newAccessToken);
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    },
);
export { axiosPrivate };
