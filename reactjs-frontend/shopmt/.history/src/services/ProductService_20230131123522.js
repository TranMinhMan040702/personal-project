import axios from 'axios';

const PRODUCT_API_URL = process.env.REACT_APP_PRODUCT_API_URL;
const PRODUCT_API_GET_ONE_URL = process.env.REACT_APP_PRODUCT_API_GET_ONE_URL;
class ProductService {
    getProducts() {
        return axios.get(PRODUCT_API_URL);
    }
    getImage(image) {
        return axios.get(image);
    }
    getImageV2(image) {
        return axios.get(PRODUCT_API_URL + '/' + image);
    }
    getProductById(id) {
        return axios.get(PRODUCT_API_GET_ONE_URL + '?id=' + id);
    }
    addProduct(product) {
        return axios.post(PRODUCT_API_URL, product);
    }
    deleteProduct(id) {
        return axios.delete(PRODUCT_API_URL + '/' + id);
    }
}

export default new ProductService();
