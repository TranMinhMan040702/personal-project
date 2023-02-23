import { useAxiosPrivate } from '../hooks';

export const GetUsers = async () => {
    const axiosPrivate = useAxiosPrivate();
    try {
        const response = await axiosPrivate.get('/users');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
