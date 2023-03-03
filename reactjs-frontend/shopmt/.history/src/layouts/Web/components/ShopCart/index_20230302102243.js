import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './shopcart.scss';
import images from '../../../../assets/images';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../../../config';
import { useSelector } from 'react-redux';
import { cartUser } from '../../../../redux/selectors';
import { useState } from 'react';

function ShopCart() {
    const cart = useSelector(cartUser);
    const [listProducts, setListProducts] = useState([]);
    const [product, setProduct] = useState({});

    const handleUniqueCart = () => {
        let arr = [];
        if (arr.length > 0) {
            cart.forEach((element) => {
                if (!arr.find((item) => item.id === element.id)) arr.push(element);
            });
        } else {
            arr.push(cart[0]);
        }
        return arr;
    };

    const handleCountItem = () => {
        let count = 0;
        const uniqueCart = handleUniqueCart();
    };

    return (
        <div className="shop-cart">
            <div className="container cart-items d-flex justify-content-between">
                <div className="cart-list">
                    <div className="product cart-item d-flex justify-content-between">
                        <div className="cart-details d-flex align-items-center">
                            <div className="cart-image">
                                <img src={images.products.p1} alt="product" />
                            </div>
                            <div className="cart-info">
                                <h4>Nhà giả kim</h4>
                                <h5>100.000.00 * 2</h5>
                                <span>200.000.00 vnd</span>
                            </div>
                        </div>
                        <div className="cart-item-function">
                            <div className="cart-remove">
                                <button>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            <div className="cart-control">
                                <button className="incBtn">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                                <button className="decBtn">
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product cart-total">
                    <h2>Giỏ hàng</h2>
                    <div className="d-flex justify-content-between">
                        <h4>Tổng giá :</h4>
                        <h3>200.000.00 vnd</h3>
                    </div>
                    <Link to={config.routes.web.checkout}>Thanh toán</Link>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;
