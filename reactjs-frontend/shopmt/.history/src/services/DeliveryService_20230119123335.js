import axios from 'axios';

const DELIVERY_API_URL = 'http://localhost:8081/api/v1/deliverise';

class Delivery {
    getDelivery() {
        return axios.get(DELIVERY_API_URL);
    }
    addDelivery(delivery) {
        return axios.post(DELIVERY_API_URL, delivery);
    }
    updateDelivery(delivery) {
        return axios.put(DELIVERY_API_URL + '/' + delivery.id, delivery);
    }
    deletedPermanentlyDelivery(listIds) {
        console.log(listIds);
        return axios.delete(DELIVERY_API_URL + '/' + listIds);
    }
}

export default new Delivery();
