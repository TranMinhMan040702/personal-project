import { axiosPrivate } from '../api/axios';

class UserService {
    getUsers() {
        return axiosPrivate.get('/users');
    }
}
