import axios from 'axios';

const PRODUCT_API_URL = 'http://localhost:8081/api/v1/products';

class ProductService {
    getProducts() {
        return axios.get(PRODUCT_API_URL);
    }
    getImage(image) {
        return axios.get(image);
    }
    addProduct(product) {
        return axios.post(PRODUCT_API_URL, product);
    }
    deleteProduct(id) {
        return axios.delete(PRODUCT_API_URL + '/' + id);
    }
}

export default new ProductService();
