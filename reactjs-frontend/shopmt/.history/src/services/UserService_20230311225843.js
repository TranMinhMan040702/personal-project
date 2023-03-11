import { axiosPrivate } from '../api/axios';
const REACT_APP_USER_API_URL = process.env.REACT_APP_USER_API_URL;
const REACT_APP_USER_ADMIN_API_URL = process.env.REACT_APP_USER_ADMIN_API_URL;
class UserService {
    getUsers() {
        return axiosPrivate.get(REACT_APP_USER_ADMIN_API_URL);
    }
    getUserById(id) {
        return axiosPrivate.get(REACT_APP_USER_API_URL + '/' + id);
    }
}

export default new UserService();
