import { useAxiosPrivate } from '../hooks';

export function GetUsers() {
    const axiosPrivate = useAxiosPrivate();
    return axiosPrivate.get('/admin/api/v1/users');
}
