import { axiosPrivate } from '../api/axios';
const REACT_APP_CART_API_URL = process.env.REACT_APP_CART_API_URL;
class CartService {
    getCart(userId) {
        return axiosPrivate.get(REACT_APP_CART_API_URL + '/user/' + userId);
    }
    addToCart(data) {
        return axiosPrivate.post(REACT_APP_CART_API_URL, data);
    }
    deleteOne(cartItemId) {
        return axiosPrivate.put(REACT_APP_CART_API_URL + '/deleteOne?cartItemId=' + cartItemId);
    }
    deleteAll(cartItemId) {
        return axiosPrivate.delete(REACT_APP_CART_API_URL + '/deleteAll?cartItemId=' + cartItemId);
    }
    clearedCart(cartId) {
        return axiosPrivate.put(REACT_APP_CART_API_URL + '/' + cartId);
    }
}

export default new CartService();
