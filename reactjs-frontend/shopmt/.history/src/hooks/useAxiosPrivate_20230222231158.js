import { axiosPrivate } from '../api/axios';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();
};

export default useAxiosPrivate;
