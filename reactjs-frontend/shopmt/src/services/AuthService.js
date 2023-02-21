import axios from 'axios';
const LOGIN_URL = process.env.REACT_APP_AUTH_API_URL + '/authenticate';
class AuthService {
    login(user) {
        return axios.post(LOGIN_URL, user);
    }
}

export default new AuthService();
