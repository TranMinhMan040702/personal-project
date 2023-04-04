import { data } from 'jquery';
import { axiosPrivate } from '../api/axios';
const REACT_APP_ORDER_API_URL = process.env.REACT_APP_ORDER_API_URL;
class Order {
    createOrder(order) {
        return axiosPrivate.post(REACT_APP_ORDER_API_URL, order);
    }
}

export default new Order();
