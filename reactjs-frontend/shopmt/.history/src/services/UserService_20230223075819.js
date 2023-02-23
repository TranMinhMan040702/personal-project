import { useAxiosPrivate } from '../hooks';
const REACT_APP_USER_API_URL = process.env.REACT_APP_USER_API_URL;

export const GetUsers = () => {
    const axiosPrivate = useAxiosPrivate();
    return axiosPrivate.get('/userss');
};
