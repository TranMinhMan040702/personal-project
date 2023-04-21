import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';

const REACT_APP_REVIEW_API_URL = process.env.REACT_APP_REVIEW_API_URL;
class ReviewService {
    postReview(review) {
        return axiosPrivate.post(REACT_APP_REVIEW_API_URL, review);
    }
    getAllReviewByProduct(productId) {
        return axios.get(REACT_APP_REVIEW_API_URL + '/product' + productId);
    }
}
export default new ReviewService();
