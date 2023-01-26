import axios from 'axios';

const PRODUCT_API_URL = 'http://localhost:8081/api/v1/products';

class ProductService {
    addProduct(product) {
        return axios.post('');
    }
}

export default new ProductService();
