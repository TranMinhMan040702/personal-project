import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './shopcart.scss';
import images from '../../../../assets/images';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
function ShopCart() {
    return (
        <div className="cart">
            <div className="container cart-items d-flex justify-content-between">
                <div className="cart-list">
                    <div className="product cart-item d-flex justify-content-between">
                        <div className="cart-details d-flex align-items-center">
                            <div className="cart-image">
                                <img src={images.p2} alt="product" />
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
                    <h2>Cart Summary</h2>
                    <div className="d-flex justify-content-between align-items-end">
                        <h4>Total Price :</h4>
                        <h3>200.000.00</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;
