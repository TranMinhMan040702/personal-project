import { useAxiosPrivate } from '../hooks';

function UserService() {
    const axiosPrivate = useAxiosPrivate();

    const getUser = async () => {
        try {
            const respose = await axiosPrivate.get('users');
            return Response.data;
        } catch (err) {
            console.log(err);
        }
    };
}
