import { axiosPrivate } from '../api/axios';
import axios from '../api/axios';
const REACT_APP_CATEGORY_API_URL = process.env.REACT_APP_CATEGORY_API_URL;
const REACT_APP_CATEGORY_ADMIN_API_URL = process.env.REACT_APP_CATEGORY_ADMIN_API_URL;
class CategoryService {
    getAllCategories() {
        return axios.get(REACT_APP_CATEGORY_API_URL);
    }
    addCategory(category) {
        return axiosPrivate.post(REACT_APP_CATEGORY_ADMIN_API_URL, category);
    }
    updateCategory(category) {
        return axiosPrivate.put(REACT_APP_CATEGORY_ADMIN_API_URL + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete(REACT_APP_CATEGORY_ADMIN_API_URL + listIds);
    }
}

export default new CategoryService();
