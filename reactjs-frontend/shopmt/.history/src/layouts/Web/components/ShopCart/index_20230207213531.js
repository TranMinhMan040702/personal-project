import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './shopcart.scss';
import images from '../../../../assets/images';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
function ShopCart() {
    return (
        <div className="container cart-items d-flex justify-content-between">
            <div className="cart-list">
                <div className="product cart-item d-flex justify-content-between">
                    <div className="cart-details d-flex">
                        <div className="cart-image">
                            <img src={images.p2} alt="product" />
                        </div>
                        <div className="cart-info">
                            <h3>Nhà giả kim</h3>
                            <h4>
                                99000.00 * 2<span>2</span>
                            </h4>
                        </div>
                    </div>
                    <div className="cart-item-function">
                        <div className="cart-remove">
                            <button>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="cart-control">
                            <button>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-total">Total</div>
        </div>
    );
}

export default ShopCart;
