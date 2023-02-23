import axios from 'axios';
import { RefreshToken } from '../hooks';
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
            const newAccessToken = refreshToken();
            localStorage.setItem('token', newAccessToken);
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    },
);

function refreshToken() {
    const refresh = async () => {
        const response = await axios.get('/auth/token/refresh', {
            withCredentials: true,
        });
        return response.data.accessToken;
    };
    return refresh;
}
export { axiosPrivate };
