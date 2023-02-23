import { axiosPrivate } from '../api/axios';
const REACT_APP_CATEGORY_API_URL = process.env.REACT_APP_CATEGORY_API_URL;
const REACT_APP_CATEGORY_ADMIN_API_URL = process.env.REACT_APP_CATEGORY_ADMIN_API_URL;
class CategoryService {
    getAllCategories() {
        return axiosPrivate.get('/categorise');
    }
    addCategory(category) {
        return axiosPrivate.post('/admin/categorise', category);
    }
    updateCategory(category) {
        return axiosPrivate.put('/admin/categorise/' + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete('/admin/categorise/' + listIds);
    }
}

export default new CategoryService();
