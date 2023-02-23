import { axiosPrivate } from '../api/axios';

class UserService {
    getUsers() {
        return axiosPrivate.get('/admin/api/v1/users');
    }
}

export default new UserService();
