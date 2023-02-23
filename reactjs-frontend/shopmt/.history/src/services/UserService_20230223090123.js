import { useAxiosPrivate } from '../hooks';

export const useGetUsers = () => {
    const axiosPrivate = useAxiosPrivate();
    return axiosPrivate.get('/users');
};
