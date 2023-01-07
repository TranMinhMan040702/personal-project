import axios from 'axios';

const CATEGORY_API_URL = 'http://localhost:8081/api/v1/categorise';

function CategoryService() {
    function getCategorise() {
        return axios.request(CATEGORY_API_URL);
    }
}

export default CategoryService;
