import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './shopcart.scss';
import images from '../../../../assets/images';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function ShopCart() {
    return (
        <div className="container cart-items d-flex justify-content-between">
            <div className="cart-list">
                <div className="cart-item product">
                    <div className="cart-image">
                        <img src={images.p2} alt="product" />
                    </div>
                    <div className="cart-details">
                        <h3>Nhà giả kim</h3>
                        <h4>
                            99000.00 * 2<span>2</span>
                        </h4>
                    </div>
                    <div className="cart-item-function">
                        <div className="cart-remove">
                            <button>
                                <FontAwesomeIcon icon={faXmark} />
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
