import { axiosPrivate } from '../api/axios';
const REACT_APP_USER_API_URL = process.env.REACT_APP_USER_API_URL;
const REACT_APP_USER_ADMIN_API_URL = process.env.REACT_APP_USER_ADMIN_API_URL;
class UserService {
    getUsers(requestParams) {
        return axiosPrivate.get(REACT_APP_USER_ADMIN_API_URL + '?' + requestParams);
    }
    getUserById(id) {
        return axiosPrivate.get(REACT_APP_USER_API_URL + '/' + id);
    }
    updateUser(user) {
        return axiosPrivate.post(REACT_APP_USER_API_URL, user);
    }
}

export default new UserService();
