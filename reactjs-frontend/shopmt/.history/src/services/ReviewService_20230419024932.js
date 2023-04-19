import { axiosPrivate } from '../api/axios';

const REACT_APP_REVIEW_API_URL = process.env.REACT_APP_REVIEW_API_URL;
class ReviewService {
    postReview(review) {
        return axiosPrivate.post(REACT_APP_REVIEW_API_URL, review);
    }
}
export default new ReviewService();
