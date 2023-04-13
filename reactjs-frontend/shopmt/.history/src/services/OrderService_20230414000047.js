import { axiosPrivate } from '../api/axios';
const REACT_APP_ORDER_API_URL = process.env.REACT_APP_ORDER_API_URL;
const REACT_APP_ORDER_ADMIN_API_URL = process.env.REACT_APP_ORDER_ADMIN_API_URL;

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
    getOrderById(orderId) {
        return axiosPrivate.get(REACT_APP_ORDER_API_URL + '/' + orderId);
    }
    updateStatus(orderId, status) {
        return axiosPrivate.put(
            REACT_APP_ORDER_API_URL + '?orderId=' + orderId + '&status=' + status,
        );
    }
    getAllOrders(requestParams) {
        return axiosPrivate.get(REACT_APP_ORDER_ADMIN_API_URL + '?' + requestParams);
    }
}

export default new Order();
