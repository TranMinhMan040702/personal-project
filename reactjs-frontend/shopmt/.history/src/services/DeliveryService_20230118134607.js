import axios from 'axios';

const DELIVERY_API_URL = 'http://localhost:8081/api/v1/deliverise';

class Delivery {
    getDelivery() {
        return axios.get(DELIVERY_API_URL);
    }
}
