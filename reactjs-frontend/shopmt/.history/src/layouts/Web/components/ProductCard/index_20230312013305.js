import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHeart, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import config from '../../../../config';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { accountUser } from '../../../../redux/selectors';
import { addToCart } from '../../../../redux/slice/cartSlice';

function ProductCard({ product }) {
    const PRODUCT_URL = process.env.REACT_APP_BASE_URL + '/images/products';
    const dispatch = useDispatch();
    const account = useSelector(accountUser);

    const handleDiscount = (price, promotionalPrice) => {
        const discount = Math.round(((price - promotionalPrice) / price) * 100);
        return discount;
    };
    const handleAddToCart = () => {
        dispatch(addToCart({ cartId: account.cartId, count: 1, product: product }));
        toast.success(config.message.addToCartSuccess);
    };

    return (
        <div className="product">
            <span className="discount">{handleDiscount(product.price, product.promotionalPrice)}%</span>
            <Link to={config.routes.web.productDetails + '\\' + product.id} className="img-wrap">
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
                    <button onClick={handleAddToCart}>
                        <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                    </button>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default ProductCard;
