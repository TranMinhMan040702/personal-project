/* eslint-disable jsx-a11y/img-redundant-alt */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBook, faUsd } from '@fortawesome/free-solid-svg-icons';
import './home.scss';
import images from '../../../assets/images';
function Home() {
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
                                    <FontAwesomeIcon className="sidebar-icon" icon={faBagShopping} />
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
                                    <h6 className="mb-1">Total Sales</h6>
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
                                <h5 className="card-title">Sale statistic</h5>
                                <img
                                    src={images.static}
                                    alt="image statistic sale"
                                    style={{ width: '100%', height: '350px', 'object-fit': 'contain' }}
                                />
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
                                    style={{ width: '100%', height: '350px', 'object-fit': 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <div className="card-title">Latest Orders</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
