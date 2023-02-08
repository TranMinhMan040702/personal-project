import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../assets/images';
import './productdetail.scss';
function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="product container d-flex justify-content-between">
                <div className="product-imgs">
                    <div className="images-container">
                        <img src={images.p2} alt="" />
                    </div>
                    <div className="small-images-container"></div>
                </div>
                <div className="product-des">
                    <div className="info">
                        <h4>Nhà giả kim</h4>
                        <span>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </div>
                    <div className="price d-flex">
                        <h3>60.830 đ</h3>
                        <span>80.000 đ</span>
                        <span>-23%</span>
                    </div>
                    <div className="quantity d-flex">
                        <h4>Số lượng:</h4>
                        <div className="button-qty">
                            <button>
                                <FontAwesomeIcon icon={faSubtract} />
                            </button>
                            <span>5</span>
                            <button>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <div className="control-btn">
                        <button className="add-to-cart"></button>
                        <button className="buy-now"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
