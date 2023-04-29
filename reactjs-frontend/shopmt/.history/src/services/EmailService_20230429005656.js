import axios from 'axios';
const URL_SEND_MAIL = 'http://localhost:8081/email/sendMail';
const URL_SEND_MAIL_FORGOTPASSWORD = 'http://localhost:8081/email/sendEmailForgotPassword';
const URL_CHECK_OTP = 'http://localhost:8081/email/verify/';
const URL_CHECK_EMAIL = 'http://localhost:8081/email/checkUserExist';
class EmailService {
    sendEmail(data) {
        return axios.post(URL_SEND_MAIL, data);
    }
    sendEmailForgotPassword(email) {
        return axios.post(URL_SEND_MAIL_FORGOTPASSWORD + '?email=' + email);
    }
    checkOtp(code) {
        return axios.post(URL_CHECK_OTP + code);
    }
    checkEmailExist(data) {
        return axios.post(URL_CHECK_EMAIL, data);
    }
}

export default new EmailService();
