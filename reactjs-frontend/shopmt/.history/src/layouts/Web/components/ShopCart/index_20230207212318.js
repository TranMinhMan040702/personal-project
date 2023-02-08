import './shopcart.scss';
import images from '../../../../assets/images';
function ShopCart() {
    return (
        <div className="cart-items d-flex justify-content-between">
            <div className="cart-list">
                <div className="cart-item product">
                    <div className="cart-image">
                        <img src={images.p2} alt="product" />
                    </div>
                    <div className="cart-details"></div>
                </div>
            </div>
            <div className="cart-total">Total</div>
        </div>
    );
}

export default ShopCart;
