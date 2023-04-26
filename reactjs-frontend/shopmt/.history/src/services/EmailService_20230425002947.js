import axios from 'axios';
const URL_SEND_MAIL = 'http://localhost:8081/sendMail';
class EmailService {
    sendEmail(data) {
        return axios.post(URL_SEND_MAIL, data);
    }
}

export default new EmailService();
