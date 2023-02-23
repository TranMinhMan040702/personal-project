import { useAxiosPrivate } from '../hooks';
export const getUser = () => {
    const response = useAxiosPrivate().get('/users');
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
