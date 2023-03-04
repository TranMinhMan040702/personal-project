import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function CartItem({ item, handleIncreaseCount, handleDecreaseCount }) {
    const PRODUCT_URL = process.env.REACT_APP_BASE_URL + '/images/products';

    return (
        <div className="product cart-item d-flex justify-content-between" style={{ 'margin-bottom': '0' }}>
            <div className="cart-details d-flex align-items-center">
                <div className="cart-image">
                    <img src={PRODUCT_URL + '\\' + item.product.images[0]} alt="product" />
                </div>
                <div className="cart-info">
                    <h4>{item.product.name}</h4>
                    <h5>
                        {item.product.promotionalPrice} * {item.count}
                    </h5>
                    <span>{item.product.promotionalPrice * item.count}</span>
                </div>
            </div>
            <div className="cart-item-function">
                <div className="cart-remove">
                    <button>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="cart-control">
                    <button className="incBtn" onClick={() => handleIncreaseCount(item.product)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <span>{item.count}</span>
                    <button className="decBtn" onClick={() => handleDecreaseCount(item.product.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
