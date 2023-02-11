import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import images from '../../../../assets/images';
import config from '../../../../config';
import { useEffect } from 'react';
function Purchase() {
    const path = config.routes.web.user + '/purchase';
    const url = useLocation();
    // const handleOnClick = (e) => {
    //     const state = url.search.split('=')[1];
    //     const tag = document.getElementById(state);
    //     tag.classList.add('active');
    // };
    useEffect(() => {
        const state = url.search.split('=')[1];
        const tag = document.getElementById(state);
        tag.classList.add('active');
    }, [url]);
    return (
        <div className="purchase">
            <div className="nav-purchase wapper mb-3">
                <ul className="d-flex justify-content-between align-items-center">
                    <li id="ALL">
                        <Link to={path + '?state=ALL'}>Tất cả</Link>
                    </li>
                    <li id="NOT_PROCESSED">
                        <Link to={path + '?state=NOT_PROCESSED'}>Chờ thanh toán</Link>
                    </li>
                    <li id="PROCESSING">
                        <Link to={path + '?state=PROCESSING'}>Vận chuyển</Link>
                    </li>
                    <li id="SHIPPED">
                        <Link to={path + '?state=SHIPPED'}>Đang giao</Link>
                    </li>
                    <li id="DELIVERED">
                        <Link to={path + '?state=DELIVERED'}>Hoàn thành</Link>
                    </li>
                    <li id="CANCELLED">
                        <Link to={path + '?state=CANCELLED'}>Đã hủy</Link>
                    </li>
                </ul>
            </div>
            <div className="cart-list">
                <div className="wapper cart-item">
                    <div className="cart-header d-flex justify-content-end align-items-center">
                        <FontAwesomeIcon icon={faTruck} />
                        <span>Đơn hàng đang giao</span>
                    </div>
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
