import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import { faHeart, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
function ProductCard() {
    return (
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
                <button className="add-to-cart">
                    <FontAwesomeIcon icon={faSquarePlus} />
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;