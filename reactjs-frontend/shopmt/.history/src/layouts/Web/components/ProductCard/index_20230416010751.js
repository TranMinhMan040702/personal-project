import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHeart, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { accountUser } from '../../../../redux/selectors';
import { addToCart } from '../../../../redux/slice/cartSlice';
import { formatter } from '../../../../utils';
import config from '../../../../config';

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const account = useSelector(accountUser);

    const handleDiscount = (price, promotionalPrice) => {
        const discount = Math.round(((price - promotionalPrice) / price) * 100);
        return discount;
    };
    const handleAddToCart = () => {
        dispatch(addToCart({ cartId: account.cartId, count: 1, product: product }));
        toast.success(config.message.success.addToCart);
    };
    const handleLikeProduct = (userId, productId) => {};
    return (
        <div className="product">
            <span className="discount">
                {handleDiscount(product.price, product.promotionalPrice)}%
            </span>
            <Link to={config.routes.web.productDetails + '\\' + product.id} className="img-wrap">
                <img src={product.images[0]} alt="product" />
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
                    <span className=" original-price">{product.price}</span>
                    <span className="discount-price">{product.promotionalPrice}</span>
                </div>
                <div className="like-add d-flex justify-content-between align-items-center">
                    <button onClick={() => handleLikeProduct(account.id, product.id)}>
                        <FontAwesomeIcon className="icon" icon={faHeart} />
                    </button>
                    <button onClick={handleAddToCart}>
                        <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                    </button>
                </div>
            </div>
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </div>
    );
}

export default ProductCard;
