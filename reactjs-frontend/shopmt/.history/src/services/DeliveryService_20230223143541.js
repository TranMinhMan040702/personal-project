import { axiosPrivate } from '../api/axios';

class Delivery {
    getDelivery() {
        return axiosPrivate.get('/deliverise');
    }
    addDelivery(delivery) {
        return axiosPrivate.post('/admin/deliverise', delivery);
    }
    updateDelivery(delivery) {
        return axiosPrivate.put('/admin/deliverise/' + delivery.id, delivery);
    }
    deletedPermanentlyDelivery(listIds) {
        return axiosPrivate.delete('/admin/deliverise/' + listIds);
    }
}

export default new Delivery();
