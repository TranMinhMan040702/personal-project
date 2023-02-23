import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();
    const refresh = async () => {
        const response = await axios.post('/auth/refresh', { tokenRefresh: auth.accessToken });
        setAuth((prev) => {
            return { ...prev, accessToken: response.data.accessToken };
        });
        return response.data.accessToken;
    };
    return refresh;
};

export default useRefreshToken;
