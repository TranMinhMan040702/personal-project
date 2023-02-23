import { axiosPrivate } from '../api/axios';
const REACT_APP_USER_API_URL = process.env.REACT_APP_USER_API_URL;
const REACT_APP_USER_ADMIN_API_URL = process.env.REACT_APP_USER_ADMIN_API;
class UserService {
    getUsers() {
        return axiosPrivate.get('/admin/users');
    }
}

export default new UserService();
