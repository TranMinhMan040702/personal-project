import Categories from './Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import './shop.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
                <div className="shopcards">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Sản phẩm</h4>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="row">
                            <div className="col-lg-4 mb-5">
                                <div className="product">
                                    <span className="discount">50%</span>
                                    <Link className="img-wrap">
                                        <img src={images.p2} alt="product" />
                                    </Link>
                                    <div className="info-wrap">
                                        <Link className="title text-truncate">Nhà giả kim</Link>
                                        <div className="rate">
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                        </div>
                                        <div className="price">
                                            <span className=" original-price">100000</span>
                                            <span className="discount-price">90000</span>
                                        </div>
                                    </div>
                                    {/* .add-love */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
