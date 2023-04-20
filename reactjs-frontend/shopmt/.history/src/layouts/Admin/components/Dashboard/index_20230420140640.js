/* eslint-disable jsx-a11y/img-redundant-alt */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBook, faUsd } from '@fortawesome/free-solid-svg-icons';
import images from '../../../../assets/images';
import './dashboard.scss';
import ChartStatisticsSale from './ChartStatisticsSale';
import StatisticService from '../../../../services/StatisticService';
import { useEffect, useState } from 'react';
function Dashboard() {
    const [revenue, setRevenue] = useState([]);

    useEffect(() => {
        statisticsRevenue(2023);
    }, []);

    const statisticsRevenue = async (year) => {
        try {
            const response = await StatisticService.statisticRevenue(year);
            setRevenue(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container-fluid">
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
                                    <span>22,67</span>
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
                                    <span>150</span>
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
                                    <span>22,67</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mt-1">Sale statistic</h5>
                                    <select
                                        className="form-select"
                                        name="limit"
                                        style={{ width: '50%' }}
                                        // onChange={(e) => handleChange(e)}
                                    >
                                        <option value="20">20 sản phẩm</option>
                                        <option value="30">30 sản phẩm</option>
                                        <option value="40">40 sản phẩm</option>
                                    </select>
                                </div>
                                <ChartStatisticsSale dataStatistic={revenue} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Product statistic</h5>
                                <img
                                    src={images.product}
                                    alt="image statistic product"
                                    style={{
                                        width: '100%',
                                        height: '350px',
                                        'object-fit': 'contain',
                                    }}
                                />
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
        </div>
    );
}

export default Dashboard;
