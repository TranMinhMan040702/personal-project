import './shopcart.scss';
function ShopCart() {
    return (
        <div className="cart-items d-flex justify-content-between">
            <div className="cart-list">
                <div className="cart-item">
                    <div className="cart-image"></div>
                    <div className="cart-details"></div>
                </div>
            </div>
            <div className="cart-total">Total</div>
        </div>
    );
}

export default ShopCart;
