import Categories from './Categories';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import './shop.scss';
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
                            <div className="product col-lg-3 mb-5">
                                <div className="shadow-sm">
                                    <Link className="img-wrap">
                                        <img src={images.p2} alt="product" />
                                    </Link>
                                    <div className="info-wrap">
                                        <Link className="title text-truncate">Nhà giả kim</Link>
                                        <div className="price">
                                            <span className=" original-price">100000</span>
                                            <span className="discount-price">90000</span>
                                        </div>
                                    </div>
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
