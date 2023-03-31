import { axiosPrivate } from '../api/axios';
const REACT_APP_ADDRESS_API_URL = process.env.REACT_APP_ADDRESS_API_URL;
class AddressService {
    getAddressesByUserId(userId) {
        return axiosPrivate.get(REACT_APP_ADDRESS_API_URL + '/' + userId);
    }
    uploadAddress(address) {
        return axiosPrivate.post(REACT_APP_ADDRESS_API_URL, address);
    }
    deleteAddressById(id) {
        return axiosPrivate.put(REACT_APP_ADDRESS_API_URL + '/' + id);
    }
}

export default new AddressService();
