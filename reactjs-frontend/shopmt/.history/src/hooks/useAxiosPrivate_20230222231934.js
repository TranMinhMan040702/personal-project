import { axiosPrivate } from '../api/axios';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
import { useEffect } from 'react';
const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error),
        );
        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
            },
        );
        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, [auth, refresh]);
};

export default useAxiosPrivate;
