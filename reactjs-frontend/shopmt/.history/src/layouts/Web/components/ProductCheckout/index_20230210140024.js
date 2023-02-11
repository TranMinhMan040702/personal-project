import './productcheckout.scss';
import images from '../../../../assets/images';
function ProductCheckout() {
    return (
        <div className="productCheckout background">
            <div className="container">
                <div className="cart-list">
                    <div className="product cart-item">
                        <div className="cart-details d-flex align-items-center justify-content-between">
                            <div className="cart-image">
                                <img src={images.products.p1} alt="product" />
                                <h4>Nhà giả kim</h4>
                            </div>
                            <h5>100.000.00 * 2</h5>
                            <span>200.000.00 vnd</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCheckout;
