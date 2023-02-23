import { axiosPrivate } from '../api/axios';

class UserService {
    getUsers() {
        return axiosPrivate.get('/admin/users');
    }
}

export default new UserService();
