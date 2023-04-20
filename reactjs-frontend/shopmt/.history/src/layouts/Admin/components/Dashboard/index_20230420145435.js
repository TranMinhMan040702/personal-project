/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBook, faUsd } from '@fortawesome/free-solid-svg-icons';
import images from '../../../../assets/images';
import './dashboard.scss';
import ChartStatisticsSale from './ChartStatisticsSale';
import ChartStatisticsRating from './ChartStatisticsRating';
import StatisticService from '../../../../services/StatisticService';
import { useEffect, useState } from 'react';
import Loading from '../../../../components/Loading';
import { formatter } from '../../../../utils';

function Dashboard() {
    const getYearCurrent = () => {
        var currentTime = new Date();
        return currentTime.getFullYear();
    };
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState();
    const [revenue, setRevenue] = useState([]);
    const [year, setYear] = useState(getYearCurrent());

    useEffect(() => {
        statisticsRevenue(year);
    }, [year]);

    useEffect(() => {
        getTotal();
        statisticsRevenue(year);
        setLoading(false);
    }, []);

    const getTotal = async () => {
        try {
            const response = await StatisticService.getTotal();
            setTotal(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const statisticsRevenue = async (year) => {
        try {
            const response = await StatisticService.statisticRevenue(year);
            setRevenue(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setYear(e.target.value);
    };

    return (
        <div className="container-fluid">
            {loading ? (
                <Loading />
            ) : (
                <div className="title">
                    <h2>Dash board</h2>
                    <div className="row mt-3">
                        <div className="col-lg-4">
                            <div className="card card-body mb-4 shadow-sm">
                                <article className="icontext">
                                    <span className="icon rounded-circle alert alert-primary">
                                        <FontAwesomeIcon className="sidebar-icon" icon={faUsd} />
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Total Sales</h6>
                                        <span>{formatter(total.totalSales)}</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-body mb-4 shadow-sm">
                                <article className="icontext">
                                    <span className="icon rounded-circle alert alert-info">
                                        <FontAwesomeIcon
                                            className="sidebar-icon"
                                            icon={faBagShopping}
                                        />
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Total Oders</h6>
                                        <span>{total.totalOrder}</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card card-body mb-4 shadow-sm">
                                <article className="icontext">
                                    <span className="icon rounded-circle alert alert-warning">
                                        <FontAwesomeIcon className="sidebar-icon" icon={faBook} />
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Total Product</h6>
                                        <span>{total.totalProduct}</span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h5 className="card-title mt-3">Sale statistic</h5>
                                        <select
                                            className="form-select"
                                            name="limit"
                                            style={{ width: '50%' }}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option value={getYearCurrent() - 1}>
                                                {getYearCurrent() - 1}
                                            </option>
                                            <option selected value={getYearCurrent()}>
                                                {getYearCurrent()}
                                            </option>
                                            <option value={getYearCurrent() + 1}>
                                                {getYearCurrent() + 1}
                                            </option>
                                        </select>
                                    </div>
                                    <ChartStatisticsSale dataStatistic={revenue} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Product statistic</h5>
                                    <ChartStatisticsRating />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Latest Orders</h5>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
