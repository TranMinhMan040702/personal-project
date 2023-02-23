import { useAxiosPrivate } from '../hooks';

class UserService {
    getUsers() {
        return useAxiosPrivate().get('/users');
    }
}
