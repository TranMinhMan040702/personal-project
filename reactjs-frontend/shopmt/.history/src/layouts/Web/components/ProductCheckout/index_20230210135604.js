import './productcheckout.scss';
import images from '../../../../assets/images';
function ProductCheckout() {
    return (
        <div className="productCheckout background">
            <div className="container">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCheckout;
