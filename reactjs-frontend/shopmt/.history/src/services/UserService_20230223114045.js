import { useAxiosPrivate } from '../hooks';

export const useGetUsers = () => {
    return useAxiosPrivate().get('/users');
};
