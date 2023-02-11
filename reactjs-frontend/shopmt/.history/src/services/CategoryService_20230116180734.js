import axios from 'axios';

const CATEGORY_API_URL = 'http://localhost:8081/api/v1/categorise';

class CategoryService {
    getAllCategories() {
        return axios.get(CATEGORY_API_URL);
    }
    addCategory(category) {
        return axios.post(CATEGORY_API_URL, category);
    }
    deletedPermanentlyCategory(listIds) {
        if (listIds.length === 0) {
            alert('Please select category');
        } else {
            return axios.delete(CATEGORY_API_URL + '/' + listIds);
        }
    }
}

export default new CategoryService();