import { axiosPrivate } from '../api/axios';

const CATEGORY_API_URL = '/api/v1/';

class CategoryService {
    getAllCategories() {
        return axiosPrivate.get(CATEGORY_API_URL);
    }
    addCategory(category) {
        return axiosPrivate.post(CATEGORY_API_URL, category);
    }
    updateCategory(category) {
        return axiosPrivate.put(CATEGORY_API_URL + '/' + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete(CATEGORY_API_URL + '/' + listIds);
    }
}

export default new CategoryService();
