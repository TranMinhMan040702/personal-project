import axios from 'axios';

const CATEGORY_API_URL = 'http://localhost:8081/api/v1/categorise';

class CategoryService {
    getAllCategories() {
        return axios.request(CATEGORY_API_URL);
    }
}

export default new CategoryService();
