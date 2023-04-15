import { axiosPrivate } from '../api/axios';

const REACT_APP_USER_API_URL = process.env.REACT_APP_USER_API_URL;
class LikeProductService {
    likeProduct(userId, productId) {
        return axiosPrivate.post(
            REACT_APP_USER_API_URL + '/follow-product?userId=' + userId + '&productId=' + productId,
        );
    }
    unLikeProduct(userId, productId) {
        return axiosPrivate.put(
            REACT_APP_USER_API_URL + '/follow-product?userId=' + userId + '&productId=' + productId,
        );
    }
}
export default new LikeProductService();
