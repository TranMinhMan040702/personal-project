import axios from 'axios';
const REACT_APP_USER_API_URL = process.env.REACT_APP_USER_API_URL;
class UserService {
    getUsers() {
        return axios.get(REACT_APP_USER_API_URL);
    }
}

export default new UserService();
