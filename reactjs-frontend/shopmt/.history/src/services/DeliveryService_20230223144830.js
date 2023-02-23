import { axiosPrivate } from '../api/axios';
const REACT_APP_DELIVERY_API_URL = process.env.REACT_APP_DELIVERY_API_URL;
const REACT_APP_PRODUCT_ADMIN_API_URL = process.env.REACT_APP_PRODUCT_ADMIN_API_URL;
const REACT_APP_DELIVERY_ADMIN_API_URL = process.env.REACT_APP_DELIVERY_ADMIN_API_URL;
class Delivery {
    getDelivery() {
        return axiosPrivate.get(REACT_APP_DELIVERY_API_URL);
    }
    addDelivery(delivery) {
        return axiosPrivate.post(REACT_APP_DELIVERY_ADMIN_API_URL, delivery);
    }
    updateDelivery(delivery) {
        return axiosPrivate.put(REACT_APP_DELIVERY_ADMIN_API_URL + delivery.id, delivery);
    }
    deletedPermanentlyDelivery(listIds) {
        return axiosPrivate.delete(REACT_APP_DELIVERY_ADMIN_API_URL + listIds);
    }
}

export default new Delivery();
