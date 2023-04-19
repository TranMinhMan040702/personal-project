import { axiosPrivate } from '../api/axios';

const REACT_APP_REVIEW_API_URL = process.env.REACT_APP_REVIEW_API_URL;
class ReviewService {
    postReview(review) {
        return axiosPrivate.post(REACT_APP_REVIEW_API_URL, review);
    }
    getAllReviewByProduct(productId) {
        return axiosPrivate.get(REACT_APP_REVIEW_API_URL + '/' + productId);
    }
}
export default new ReviewService();
