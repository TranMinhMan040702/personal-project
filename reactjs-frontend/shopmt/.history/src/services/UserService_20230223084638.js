import { useAxiosPrivate } from '../hooks';
export const GetUser = async () => {
    try {
        const response = await useAxiosPrivate().get('/users');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
// function UserService() {
//     const axiosPrivate = useAxiosPrivate();
//     const getUser = async () => {
//         try {
//             const response = await axiosPrivate.get('users');
//             return response.data;
//         } catch (err) {
//             console.log(err);
//         }
//     };
// }
// export default UserService();
