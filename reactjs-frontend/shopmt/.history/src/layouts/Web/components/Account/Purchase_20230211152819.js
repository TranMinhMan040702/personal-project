import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
function Purchase() {
    return (
        <div className="purchase">
            <div className="nav-purchase wapper mb-3">
                <ul className="d-flex justify-content-between align-items-center">
                    <li className="active">
                        <Link>Tất cả</Link>
                    </li>
                    <li>
                        <Link>Chờ thanh toán</Link>
                    </li>
                    <li>
                        <Link>Vận chuyển</Link>
                    </li>
                    <li>
                        <Link>Đang giao</Link>
                    </li>
                    <li>
                        <Link>Hoàn thành</Link>
                    </li>
                    <li>
                        <Link>Đã hủy</Link>
                    </li>
                </ul>
            </div>
            <div className="wapper">
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
        </div>
    );
}

export default Purchase;
