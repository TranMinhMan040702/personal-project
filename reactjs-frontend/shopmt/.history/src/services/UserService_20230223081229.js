import { useAxiosPrivate } from '../hooks';

export const GetUsers = () => {
    const axiosPrivate = useAxiosPrivate();
    return axiosPrivate.get('/users');
};
