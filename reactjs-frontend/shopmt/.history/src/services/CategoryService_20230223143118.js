import { axiosPrivate } from '../api/axios';

class CategoryService {
    getAllCategories() {
        return axiosPrivate.get('/categorise');
    }
    addCategory(category) {
        return axiosPrivate.post('/admin/categorise', category);
    }
    updateCategory(category) {
        return axiosPrivate.put(CATEGORY_API_URL + '/' + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete(CATEGORY_API_URL + '/' + listIds);
    }
}

export default new CategoryService();
