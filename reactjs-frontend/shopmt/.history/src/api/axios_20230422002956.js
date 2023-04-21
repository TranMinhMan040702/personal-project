import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const location = 'http://localhost:3000/login';

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
            const response = await axios.post(BASE_URL + '/auth/refresh', {
                tokenRefresh: localStorage.getItem('refreshToken'),
                userId: localStorage.getItem('userId'),
            });
            console.log(response.data);
            if (response.data.status === 200) {
                prevRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                console.log('Token đã được refresh');
            } else {
                window.location.reload(true);
            }
            return axiosPrivate(prevRequest);
        }
        if (error?.response?.status === 500) {
            window.location.href = location;
        }
        return Promise.reject(error);
    },
);
export { axiosPrivate };
