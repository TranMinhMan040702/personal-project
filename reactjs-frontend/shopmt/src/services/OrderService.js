import { data } from 'jquery';
import { axiosPrivate } from '../api/axios';
const REACT_APP_ORDER_API_URL = process.env.REACT_APP_ORDER_API_URL;
class Order {
    createOrder(order) {
        return axiosPrivate.post(REACT_APP_ORDER_API_URL, order);
    }
    getByUserAndStatus(userId, status) {
        return axiosPrivate.get(
            REACT_APP_ORDER_API_URL + '/user?userId=' + userId + '&status=' + status,
        );
    }
    getOrdersAllByUser(userId) {
        return axiosPrivate.get(REACT_APP_ORDER_API_URL + '/user/' + userId);
    }
}

export default new Order();
