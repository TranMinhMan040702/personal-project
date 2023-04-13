/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar, faTruck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { accountUser } from '../../../../redux/selectors';
import { convertStatus, formatter } from '../../../../utils';
import Empty from '../../../../components/Empty';
import Loading from '../../../../components/Loading';
import OrderService from '../../../../services/OrderService';
import config from '../../../../config';
import images from '../../../../assets/images';
function Purchase() {
    const account = useSelector(accountUser);
    let location = useLocation();
    const navigate = useNavigate();
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleActive(location.search);
        let param = location.search.split('=');
        let status = param[param.length - 1];
        if (status === 'ALL') {
            getAllOrdersByUserId(account.id);
        } else {
            getOrderByUserIdAndStatus(account.id, status);
        }
    }, [location]);
    const getOrderByUserIdAndStatus = async (userId, status) => {
        try {
            const response = await OrderService.getByUserAndStatus(userId, status);
            setOrders(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    const getAllOrdersByUserId = async (userId) => {
        try {
            const response = await OrderService.getOrdersAllByUser(userId);
            setOrders(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    const handleTotalMoney = (orderItems) => {
        return orderItems.reduce(
            (acc, item) => acc + item.product.promotionalPrice * item.count,
            0,
        );
    };
    const handleClick = (e) => {
        e.preventDefault();
        const paramOrigin = e.target.href.split('user/')[1];
        handleActive(paramOrigin);
        setLoading(true);
        navigate(config.routes.web.user + '/' + paramOrigin);
    };
    const handleActive = (paramOrigin) => {
        let tag = document.getElementsByClassName('link-purchase');
        for (var i = 0; i < tag.length; i++) {
            if (tag[i].classList.contains('active')) {
                tag[i].classList.remove('active');
            }
            if (tag[i].href.includes(paramOrigin)) {
                tag[i].classList.add('active');
            }
        }
    };
    return (
        <div className="purchase">
            <div className="nav-purchase wapper mb-3">
                <ul className="d-flex justify-content-between align-items-center">
                    <li id="ALL">
                        <Link
                            className="link-purchase"
                            to={config.routes.web.user + '/purchase?state=ALL'}
                            onClick={(e) => handleClick(e)}
                        >
                            Tất cả
                        </Link>
                    </li>
                    <li id="NOT_PROCESSED">
                        <Link
                            className="link-purchase"
                            to={config.routes.web.user + '/purchase?state=NOT_PROCESSED'}
                            onClick={(e) => handleClick(e)}
                        >
                            Chưa xử lý
                        </Link>
                    </li>
                    <li id="PROCESSING">
                        <Link
                            className="link-purchase"
                            to={config.routes.web.user + '/purchase?state=PROCESSING'}
                            onClick={(e) => handleClick(e)}
                        >
                            Đang xử lý
                        </Link>
                    </li>
                    <li id="SHIPPED">
                        <Link
                            className="link-purchase"
                            to={config.routes.web.user + '/purchase?state=SHIPPED'}
                            onClick={(e) => handleClick(e)}
                        >
                            Đang giao
                        </Link>
                    </li>
                    <li id="DELIVERED">
                        <Link
                            className="link-purchase"
                            to={config.routes.web.user + '/purchase?state=DELIVERED'}
                            onClick={(e) => handleClick(e)}
                        >
                            Hoàn thành
                        </Link>
                    </li>
                    <li id="CANCELLED">
                        <Link
                            className="link-purchase"
                            to={config.routes.web.user + '/purchase?state=CANCELLED'}
                            onClick={(e) => handleClick(e)}
                        >
                            Đã hủy
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="cart-list">
                {loading ? (
                    <Loading />
                ) : orders.length > 0 ? (
                    orders.map((order, index) => {
                        return (
                            <Link
                                to={config.routes.web.user + '/purchase/order?orderId=' + order.id}
                                key={index}
                                className="cart-item"
                            >
                                <div className="wapper">
                                    <div className="cart-header d-flex justify-content-end align-items-center">
                                        <FontAwesomeIcon icon={faTruck} />
                                        <span>Đơn hàng {convertStatus(order.status)}</span>
                                    </div>
                                    {order.orderItems.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="cart-details d-flex align-items-center justify-content-start"
                                            >
                                                <div className="name" style={{ width: '13%' }}>
                                                    <div className="cart-image d-flex">
                                                        <img
                                                            className="img-thumbnail"
                                                            src={item.product.images[0]}
                                                            alt="product"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="infor d-flex flex-column justify-content-center">
                                                    <h4>{item.product.name}</h4>
                                                    <h5 className=" text-start">x{item.count}</h5>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="money d-flex align-items-center justify-content-end">
                                    <FontAwesomeIcon
                                        style={{
                                            fontSize: '18px',
                                            color: 'var(--primary-color-web)',
                                        }}
                                        icon={faMoneyCheckDollar}
                                    />
                                    <h5>Thành tiền:</h5>
                                    <span>
                                        {formatter(
                                            handleTotalMoney(order.orderItems) +
                                                order.delivery.price,
                                        )}
                                    </span>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <Empty title="Chưa có đơn hàng" image={images.orderEmpty} />
                )}
            </div>
        </div>
    );
}

export default Purchase;
