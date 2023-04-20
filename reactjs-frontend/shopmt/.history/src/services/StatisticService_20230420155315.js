import { axiosPrivate } from '../api/axios';
const REACT_APP_STATISTIC_ADMIN_API_URL = process.env.REACT_APP_STATISTIC_ADMIN_API_URL;
const REACT_APP_ORDER_ADMIN_API_URL = process.env.REACT_APP_ORDER_ADMIN_API_URL;
class StatisticService {
    statisticRevenue(year) {
        return axiosPrivate.get(REACT_APP_STATISTIC_ADMIN_API_URL + '/chartSales?year=' + year);
    }
    statisticRating() {
        return axiosPrivate.get(REACT_APP_STATISTIC_ADMIN_API_URL + '/chartRating');
    }
    getTop5OrderLatest() {
        return axiosPrivate.get(REACT_APP_ORDER_ADMIN_API_URL + '/top-5-latest');
    }
    getTotal() {
        return axiosPrivate.get(REACT_APP_STATISTIC_ADMIN_API_URL + '/total');
    }
}

export default new StatisticService();
