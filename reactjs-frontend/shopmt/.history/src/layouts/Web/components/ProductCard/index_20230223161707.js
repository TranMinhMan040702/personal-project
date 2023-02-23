import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import { faHeart, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';
function ProductCard({ product }) {
    const PRODUCT_URL = process.env.REACT_APP_BASE_URL + '/images/products';
    const handleDiscount = (price, promotionalPrice) => {
        const discount = (promotionalPrice / price) * 100;
        return discount;
    };
    return (
        <div className="product">
            <span className="discount">{handleDiscount(product.price, product.promotionalPrice)}%</span>
            <Link to={config.routes.web.productDetails} className="img-wrap">
                <img src={PRODUCT_URL + '\\' + product.images[0]} alt="product" />
            </Link>
            <div className="info-wrap">
                <Link to={config.routes.web.productDetails} className="title text-truncate">
                    {product.name}
                </Link>
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
                <div className="like-add d-flex justify-content-between align-items-center">
                    <button>
                        <FontAwesomeIcon className="icon" icon={faHeart} />
                    </button>
                    <button>
                        <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
