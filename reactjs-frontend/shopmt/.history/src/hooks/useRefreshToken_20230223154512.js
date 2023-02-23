import axios from '../api/axios';
import useAuth from './useAuth';

const RefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/token/refresh', {
            withCredentials: true,
        });
        setAuth((prev) => {
            return { ...prev, accessToken: response.data.accessToken };
        });
        return response.data.accessToken;
    };
    return refresh;
};

export default RefreshToken;
