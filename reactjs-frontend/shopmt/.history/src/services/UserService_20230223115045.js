import { axiosPrivate } from '../api/axios';

class UserService {
    getUsers() {
        return axiosPrivate.get('/users');
    }
}

expect default new UserService();
