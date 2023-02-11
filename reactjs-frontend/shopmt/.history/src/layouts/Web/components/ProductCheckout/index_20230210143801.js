import './productcheckout.scss';
import images from '../../../../assets/images';
import { Link } from 'react-router-dom';
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
                        <h6>Phương thức vận chuyển:</h6>
                        <div className="d-flex align-items-center" style={{ 'margin-right': '120px' }}>
                            <h5>Giao hàng nhanh</h5>
                            <Link>Thay đổi</Link>
                        </div>
                        <h5>12.800 đ</h5>
                    </div>
                </div>
                <div className="finish">
                    <div className="product">
                        <div className="method-checkout d-flex justify-content-between">
                            <h6>Phương thức thanh toán</h6>
                            <div className="method d-flex align-items-center">
                                <input type="radio" value="Thanh toán khi nhận hàng" name="method" required />
                                <label htmlFor="">Thanh toán khi nhận hàng</label>
                            </div>
                            <div className="method d-flex align-items-center">
                                <input type="radio" value="Thanh toán Paypal" name="method" required />
                                <label htmlFor="">Paypal</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCheckout;
