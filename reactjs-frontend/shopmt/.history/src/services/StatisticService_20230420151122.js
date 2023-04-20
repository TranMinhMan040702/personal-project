import { axiosPrivate } from '../api/axios';
const REACT_APP_STATISTIC_ADMIN_API_URL = process.env.REACT_APP_STATISTIC_ADMIN_API_URL;
class StatisticService {
    statisticRevenue(year) {
        return axiosPrivate.get(REACT_APP_STATISTIC_ADMIN_API_URL + '/chartSales?year=' + year);
    }
    statisticRating() {
        return axiosPrivate.get(REACT_APP_STATISTIC_ADMIN_API_URL + '/chartRating');
    }
    getTotal() {
        return axiosPrivate.get(REACT_APP_STATISTIC_ADMIN_API_URL + '/total');
    }
}

export default new StatisticService();
