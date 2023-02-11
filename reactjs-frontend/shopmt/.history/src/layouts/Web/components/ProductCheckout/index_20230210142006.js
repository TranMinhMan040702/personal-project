import './productcheckout.scss';
import images from '../../../../assets/images';
function ProductCheckout() {
    return (
        <div className="productCheckout background">
            <div className="container">
                <div className="cart-list">
                    <div className="product cart-item">
                        <div className="cart-details d-flex align-items-center justify-content-between">
                            <div className="name d-flex align-items-center">
                                <div className="cart-image d-flex">
                                    <img src={images.products.p1} alt="product" />
                                </div>
                                <h4>Nhà giả kim</h4>
                            </div>
                            <div className="price">
                                <span>Đơn giá</span>
                                <h5>100.000.00</h5>
                            </div>
                            <div className="quatity">
                                <span>Số lượng</span>
                                <h5>2</h5>
                            </div>
                            <div className="total">
                                <span>Thành tiền</span>
                                <h5>200.000.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="product cart-item">
                        <div className="cart-details d-flex align-items-center justify-content-between">
                            <div className="name d-flex align-items-center">
                                <div className="cart-image d-flex">
                                    <img src={images.products.p1} alt="product" />
                                </div>
                                <h4>Nhà giả kim</h4>
                            </div>
                            <div className="price">
                                <span>Đơn giá</span>
                                <h5>100.000.00</h5>
                            </div>
                            <div className="quatity">
                                <span>Số lượng</span>
                                <h5>2</h5>
                            </div>
                            <div className="total">
                                <span>Thành tiền</span>
                                <h5>200.000.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="delivery">
                    <div className="product d-flex justify-content-between">
                        <h6>Phương thức vận chuyển</h6>
                        <div className="option">
                            <h6>Giao hàng nhanh</h6>
                            <span>Thay đổi</span>
                        </div>
                        <h5>12.800 đ</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCheckout;
