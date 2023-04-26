import axios from 'axios';
const URL_SEND_MAIL = 'http://localhost:8081/sendMail';
const URL_CHECK_OTP = 'http://localhost:8081/verify';
class EmailService {
    sendEmail(data) {
        return axios.post(URL_SEND_MAIL, data);
    }
    checkOtp(code) {
        return axios.post(URL_CHECK_OTP + '/' + code);
    }
}

export default new EmailService();
