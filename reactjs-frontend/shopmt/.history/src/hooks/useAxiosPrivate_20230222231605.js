import { axiosPrivate } from '../api/axios';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
import { useEffect } from 'react';
const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
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
    }, [auth, refresh]);
};

export default useAxiosPrivate;
