import { axiosPrivate } from '../api/axios';

const CATEGORY_API_URL = process.env.REACT_APP_CATEGORY_API_URL;

class CategoryService {
    getAllCategories() {
        return axios.get(CATEGORY_API_URL);
    }
    addCategory(category) {
        return axios.post(CATEGORY_API_URL, category);
    }
    updateCategory(category) {
        return axios.put(CATEGORY_API_URL + '/' + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axios.delete(CATEGORY_API_URL + '/' + listIds);
    }
}

export default new CategoryService();
