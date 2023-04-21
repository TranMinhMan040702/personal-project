import axios from 'axios';
const LOGIN_URL = process.env.REACT_APP_AUTH_API_URL + '/authenticate';
const REGISTER_URL = process.env.REACT_APP_AUTH_API_URL + '/register';
const LOGOUT_URL = process.env.REACT_APP_AUTH_API_URL + '/logout';
class AuthService {
    login(user) {
        return axios.post(LOGIN_URL, user);
    }
    register(user) {
        return axios.post(REGISTER_URL, user);
    }
    logout(token) {
        return axios.post(LOGOUT_URL, token);
    }
}

export default new AuthService();
