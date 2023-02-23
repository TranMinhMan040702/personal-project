import { useAxiosPrivate } from '../hooks';

export const GetUsers = () => {
    const axiosPrivate = useAxiosPrivate();
    return axiosPrivate.get('/admin/api/v1/users');
};
