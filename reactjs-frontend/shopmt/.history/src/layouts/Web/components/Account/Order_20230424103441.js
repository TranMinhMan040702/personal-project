/* eslint-disable react-hooks/exhaustive-deps */
import {
    faArrowsSpin,
    faChevronLeft,
    faDownload,
    faReceipt,
    faStar,
    faTriangleExclamation,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OrderService from '../../../../services/OrderService';
import Loading from '../../../../components/Loading';
import { convertStatus, formatter } from '../../../../utils';
import DOMPurify from 'dompurify';
import './order.scss';
import config from '../../../../config';
function Order() {
    const navigate = useNavigate();
    let location = useLocation().search.split('=')[1];
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState();
    const [style, setStyle] = useState({
        width: 'calc((100% - 140px) * 0)',
        background: 'rgb(45, 194, 88)',
    });
    useEffect(() => {
        getOrderById(location);
    }, []);
    const getOrderById = async (id) => {
        try {
            const response = await OrderService.getOrderById(id);
            setOrder(response.data);
            setLoading(false);
            handleLoadStatus(response.data.status);
        } catch (err) {
            console.log(err);
        }
    };
    const handleLoadStatus = (status) => {
        const steps = document.getElementsByClassName('stepper_step-icon');
        const position = handlePositionStatus(status);
        for (let i = 0; i < position; i++) {
            steps[i].classList.add('stepper__step-icon--finish');
        }
        steps[position].classList.add('stepper__step-icon--pending');
    };
    const handlePositionStatus = (status) => {
        switch (status) {
            case 'NOT_PROCESSED':
                setStyle((prev) => {
                    return { ...prev, width: 'calc((100% - 140px) * 0)' };
                });
                return 0;
            case 'PROCESSING':
                setStyle((prev) => {
                    return { ...prev, width: 'calc((100% - 140px) * 0.25)' };
                });
                return 1;
            case 'SHIPPED':
                setStyle((prev) => {
                    return { ...prev, width: 'calc((100% - 140px) * 0.50)' };
                });
                return 2;
            case 'DELIVERED':
                setStyle((prev) => {
                    return { ...prev, width: 'calc((100% - 140px) * 0.75)' };
                });
                return 3;
            case 'CANCELLED':
                setStyle((prev) => {
                    return { ...prev, width: 'calc((100% - 140px) * 1)' };
                });
                return 4;
            default:
                setStyle((prev) => {
                    return { ...prev, width: 'calc((100% - 140px) * 0)' };
                });
                return 0;
        }
    };
    const handleControl = (status) => {
        switch (status) {
            case 'NOT_PROCESSED':
                return (
                    <Link
                        className="btn btn-danger rounded-0 px-5"
                        onClick={() => handleCancel(order.id, 'CANCELLED')}
                    >
                        Hủy đơn hàng
                    </Link>
                );
            case 'PROCESSING':
                return (
                    <Link
                        className="btn btn-danger rounded-0 px-5"
                        onClick={() => handleCancel(order.id, 'CANCELLED')}
                    >
                        Hủy đơn hàng
                    </Link>
                );
            case 'SHIPPED':
                return (
                    <Link className="btn btn-outline-info rounded-0 px-5">Liên hệ người bán</Link>
                );
            case 'DELIVERED':
                return (
                    <Link className="btn btn-outline-info rounded-0 px-5">Liên hệ người bán</Link>
                );
            case 'CANCELLED':
                return <Link className="btn btn-danger rounded-0 px-5">Mua lại</Link>;
            default:
                return (
                    <Link
                        className="btn btn-danger rounded-0 px-5"
                        onClick={() => handleCancel(order.id, 'CANCELLED')}
                    >
                        Hủy đơn hàng
                    </Link>
                );
        }
    };
    const handleCancel = async (orderId, status) => {
        try {
            await OrderService.updateStatus(orderId, status);
            navigate(-1);
        } catch (err) {
            console.log(err);
        }
    };
    const handleAddress = (orderAddress) => {
        const address = orderAddress.split(': ');
        console.log(address);
        return address;
    };
    const linkReviewProduct = (productId, orderId) => {
        return config.routes.web.user + '/review?orderId=' + orderId + '&productId=' + productId;
    };
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="wapper">
                        <div className="header d-flex justify-content-between align-items-center">
                            <button
                                className="btn btn-link text-decoration-none"
                                style={{
                                    color: '#8d8f91',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    padding: '0',
                                }}
                                onClick={() => navigate(-1)}
                            >
                                <FontAwesomeIcon
                                    style={{ marginRight: '5px' }}
                                    icon={faChevronLeft}
                                />
                                Trở lại
                            </button>
                            <div
                                className="infor"
                                style={{ textTransform: 'uppercase', fontSize: '14px' }}
                            >
                                <span
                                    className="order-id"
                                    style={{
                                        borderRight: '1px solid #8d8f91',
                                        paddingRight: '20px',
                                    }}
                                >
                                    MÃ ĐƠN HÀNG. {order.id}
                                </span>
                                <span
                                    className="status"
                                    style={{
                                        paddingLeft: '20px',
                                        color: 'var(--primary-color-web)',
                                    }}
                                >
                                    {convertStatus(order.status)}
                                </span>
                            </div>
                        </div>
                        <div className="status-order">
                            {order.status === 'CANCELLED' ? (
                                <div className="stepper">
                                    <div className="stepper__step">
                                        <div className="stepper_step-icon">
                                            <FontAwesomeIcon icon={faReceipt} />
                                        </div>
                                        <div className="stepper_step-text">Đơn hàng đã đặt</div>
                                    </div>
                                    <div className="stepper__step">
                                        <div className="stepper_step-icon">
                                            <FontAwesomeIcon icon={faTriangleExclamation} />
                                        </div>
                                        <div className="stepper_step-text">Đơn hàng đã hủy</div>
                                    </div>
                                    <div className="stepper__line">
                                        <div
                                            className="stepper__line-background"
                                            style={{ background: 'rgb(224, 224, 224)' }}
                                        ></div>
                                        <div
                                            class="stepper__line-foreground"
                                            style={{ ...style }}
                                        ></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="stepper">
                                    <div className="stepper__step">
                                        <div className="stepper_step-icon">
                                            <FontAwesomeIcon icon={faReceipt} />
                                        </div>
                                        <div className="stepper_step-text">Đơn hàng đã đặt</div>
                                    </div>
                                    <div className="stepper__step">
                                        <div className="stepper_step-icon">
                                            <FontAwesomeIcon icon={faArrowsSpin} />
                                        </div>
                                        <div className="stepper_step-text">Đơn hàng đang xử lý</div>
                                    </div>
                                    <div className="stepper__step">
                                        <div className="stepper_step-icon">
                                            <FontAwesomeIcon icon={faTruck} />
                                        </div>
                                        <div className="stepper_step-text">Đơn hàng đang giao</div>
                                    </div>
                                    <div className="stepper__step">
                                        <div className="stepper_step-icon">
                                            <FontAwesomeIcon icon={faDownload} />
                                        </div>
                                        <div className="stepper_step-text">Đơn hàng đã giao</div>
                                    </div>
                                    <div className="stepper__step">
                                        <div className="stepper_step-icon">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="stepper_step-text">Đánh giá</div>
                                    </div>

                                    <div className="stepper__line">
                                        <div
                                            className="stepper__line-background"
                                            style={{ background: 'rgb(224, 224, 224)' }}
                                        ></div>
                                        <div
                                            class="stepper__line-foreground"
                                            style={{ ...style }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="control-order">{handleControl(order.status)}</div>

                    <div className="infor-order">
                        <div className="top"></div>
                        <div className="wapper infor-product">
                            {order.orderItems.map((item) => {
                                return (
                                    <div className="product d-flex align-items-center justify-content-between my-3">
                                        <div className="infor d-flex align-items-center justify-content-start">
                                            <div className="d-flex">
                                                <img
                                                    className=""
                                                    style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        objectFit: 'contain',
                                                    }}
                                                    src={item.product.images[0]}
                                                    alt="product"
                                                />
                                            </div>
                                            <div className="name-des mx-3">
                                                <h5>{item.product.name}</h5>
                                                <div
                                                    className="description"
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(
                                                            item.product.description,
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="control">
                                            <Link to={linkReviewProduct(item.product.id, order.id)}>
                                                Đánh giá
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="wapper">
                            <div className="header-infor">
                                <div>Địa chỉ nhận hàng</div>
                                <div>Thông tin đơn hàng</div>
                            </div>
                            <div className="infor">
                                <div className="address-infor">
                                    <div className="user-order">
                                        {handleAddress(order.address)[0]}
                                    </div>
                                    <div className="address-detail">
                                        <span>{order.phone}</span>
                                        <br />
                                        {handleAddress(order.address)[1]}
                                    </div>
                                </div>
                                <div className="order-infor">
                                    <div className="receipt d-flex justify-content-end">
                                        <div className="detail">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5>Tổng tiền hàng</h5>
                                                <span>
                                                    {formatter(
                                                        order.amountFromUser - order.delivery.price,
                                                    )}
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5>Phí vận chuyển</h5>
                                                <span>{formatter(order.delivery.price)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5>Tổng thanh toán</h5>
                                                <h3>{formatter(order.amountFromUser)}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
export default Order;
