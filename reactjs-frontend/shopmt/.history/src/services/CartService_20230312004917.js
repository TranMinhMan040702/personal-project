import { axiosPrivate } from '../api/axios';
const REACT_APP_CART_API_URL = process.env.REACT_APP_CART_API_URL;
class CartService {
    getCart(userId) {
        return axiosPrivate.get(REACT_APP_CART_API_URL + '/user/' + userId);
    }
}

export default new CartService();
