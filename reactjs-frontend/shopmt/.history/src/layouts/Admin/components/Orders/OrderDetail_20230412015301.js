/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot, faPrint, faTruck, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import OrderService from '../../../../services/OrderService';
import Loading from '../../../../components/Loading';
import { ToastContainer, toast } from 'react-toastify';
import { formatter } from '../../../../utils';
import { useEffect, useState } from 'react';
import config from '../../../../config';
function OrderDetail({ orderId }) {
    const [order, setOrder] = useState();
    const [status, setStatus] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrderById(orderId);
    }, []);
    const getOrderById = async (id) => {
        try {
            const response = await OrderService.getOrderById(id);
            setOrder(response.data);
            setStatus(response.data.status);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };
    const handleAddress = (addressOrder) => {
        const address = addressOrder.split(': ');
        return address;
    };
    const handleTotalPriceProduct = (orderItems) => {
        return orderItems.reduce(
            (acc, item) => acc + item.product.promotionalPrice * item.count,
            0,
        );
    };
    const handlePayment = (paidBefore) => {
        if (paidBefore) {
            return (
                <span
                    class="badge rounded-pill alert alert-success text-success"
                    style={{ padding: '10px' }}
                >
                    Đã thanh toán
                </span>
            );
        } else {
            return (
                <span
                    class="badge rounded-pill alert alert-danger text-danger"
                    style={{ padding: '10px' }}
                >
                    Chưa thanh toán
                </span>
            );
        }
    };
    const handleDate = (timeStamp) => {
        const date = new Date(timeStamp);
        return date.toDateString();
    };
    const handleChange = (e) => {
        setStatus(e.target.value);
    };
    const handleUpdateStatus = async (id, statusOrder) => {
        try {
            await OrderService.updateStatus(id, statusOrder);
            setStatus(statusOrder);
            toast.success(config.message.success.updateStatusOrder);
        } catch (err) {
            toast.error(config.message.error.updateStatusOrder);
            console.log(err.message);
        }
    };
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="order-detail">
                    <div className="content-header">
                        <Link to={config.routes.admin.orders} className="btn btn-dark text-white">
                            Trở lại
                        </Link>
                    </div>
                    <div className="card">
                        <div className="card-header p-3" style={{ backgroundColor: '#4fa607' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-start">
                                    <span>
                                        <FontAwesomeIcon className="mx-3" icon={faCalendarDays} />
                                        <b className="text-white">{handleDate(order.createdAt)}</b>
                                    </span>
                                    <small className="text-white mx-3">Order ID: {order.id}</small>
                                </div>
                                <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                                    <select
                                        className="form-select d-inline-block"
                                        style={{ maxWidth: '200px' }}
                                        name="status"
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option
                                            value="NOT_PROCESSED"
                                            selected={status === 'NOT_PROCESSED'}
                                        >
                                            Chưa xử lý
                                        </option>
                                        <option
                                            value="PROCESSING"
                                            selected={status === 'PROCESSING'}
                                        >
                                            Đang xử lý
                                        </option>
                                        <option value="SHIPPED" selected={status === 'SHIPPED'}>
                                            Đang giao
                                        </option>
                                        <option value="DELIVERED" selected={status === 'DELIVERED'}>
                                            Đã giao
                                        </option>
                                        <option value="CANCELLED" selected={status === 'CANCELLED'}>
                                            Xóa đơn
                                        </option>
                                    </select>
                                    <button
                                        className="btn btn-primary ms-2"
                                        onClick={() => {
                                            handleUpdateStatus(order.id, status);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faFloppyDisk} />
                                    </button>
                                    <button className="btn btn-success ms-2">
                                        <FontAwesomeIcon icon={faPrint} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row mb-5 order-info-wrap">
                                <div className="col-lg-4 d-flex align-items-center">
                                    <span className="icon icon-sm rounded-circle alert-success">
                                        <FontAwesomeIcon
                                            className="text-success"
                                            icon={faUserAlt}
                                        />
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Khách hàng</h6>
                                        <p>
                                            {handleAddress(order.address)[0]} <br />
                                            <Link>man@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex align-items-center">
                                    <span className="icon icon-sm rounded-circle alert-success">
                                        <FontAwesomeIcon className="text-success" icon={faTruck} />
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Vận chuyển</h6>
                                        <p>
                                            {order.delivery.name} <br />
                                            {order.delivery.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex align-items-center">
                                    <span className="icon icon-sm rounded-circle alert-success">
                                        <FontAwesomeIcon
                                            className="text-success"
                                            icon={faLocationDot}
                                        />
                                    </span>
                                    <div className="text">
                                        <h6 className="mb-1">Giao hàng đến</h6>
                                        <p>{`Địa chỉ: ${handleAddress(order.address)[1]}`}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <table class="table" style={{ border: '1px solid #f2f2f2' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Sản phẩm</th>
                                                <th scope="col">Giá</th>
                                                <th scope="col">Số lượng</th>
                                                <th scope="col">Tổng tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.orderItems.map((item) => {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="img">
                                                                    <img
                                                                        src={item.product.images[0]}
                                                                        alt="product"
                                                                        class="img-xs"
                                                                        style={{
                                                                            width: '40px',
                                                                            height: '40px',
                                                                            objectFit: 'cover',
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="name"
                                                                    style={{
                                                                        paddingLeft: '10px',
                                                                        fontWeight: 'bold',
                                                                    }}
                                                                >
                                                                    {item.product.name}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {formatter(
                                                                item.product.promotionalPrice,
                                                            )}
                                                        </td>
                                                        <td>{item.count}</td>
                                                        <td>
                                                            {formatter(
                                                                item.count *
                                                                    item.product.promotionalPrice,
                                                            )}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                            <tr>
                                                <td
                                                    colSpan="4"
                                                    style={{ backgroundColor: '#fdf7e8' }}
                                                >
                                                    <article style={{ float: 'right' }}>
                                                        <dl className="d-flex">
                                                            <dt
                                                                style={{
                                                                    width: '150px',
                                                                    fontWeight: '400',
                                                                }}
                                                            >
                                                                Tổng tiền sản phẩm:
                                                            </dt>
                                                            <dd
                                                                style={{
                                                                    marginLeft: '30px',
                                                                    verticalAlign: 'baseline',
                                                                    flexGrow: '1',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                {formatter(
                                                                    handleTotalPriceProduct(
                                                                        order.orderItems,
                                                                    ),
                                                                )}
                                                            </dd>
                                                        </dl>
                                                        <dl className="d-flex">
                                                            <dt
                                                                style={{
                                                                    width: '150px',
                                                                    fontWeight: '400',
                                                                }}
                                                            >
                                                                Chi phí vận chuyển:
                                                            </dt>
                                                            <dd
                                                                style={{
                                                                    marginLeft: '30px',
                                                                    verticalAlign: 'baseline',
                                                                    flexGrow: '1',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                {formatter(order.delivery.price)}
                                                            </dd>
                                                        </dl>
                                                        <dl className="d-flex">
                                                            <dt
                                                                style={{
                                                                    width: '150px',
                                                                    fontWeight: '400',
                                                                }}
                                                            >
                                                                Tổng tiền đơn hàng:
                                                            </dt>
                                                            <d
                                                                style={{
                                                                    marginLeft: '30px',
                                                                    verticalAlign: 'baseline',
                                                                    flexGrow: '1',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                <b
                                                                    class="h5"
                                                                    style={{
                                                                        color: '#b6092e',
                                                                        fontWeight: '800',
                                                                    }}
                                                                >
                                                                    {formatter(
                                                                        order.amountFromUser,
                                                                    )}
                                                                </b>
                                                            </d>
                                                        </dl>
                                                        <dl className="d-flex">
                                                            <dt
                                                                style={{
                                                                    width: '150px',
                                                                    fontWeight: '400',
                                                                }}
                                                                class="text-muted"
                                                            >
                                                                Status:
                                                            </dt>
                                                            <d
                                                                style={{
                                                                    marginLeft: '30px',
                                                                    verticalAlign: 'baseline',
                                                                    flexGrow: '1',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                {handlePayment(order.paidBefore)}
                                                            </d>
                                                        </dl>
                                                    </article>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-3">
                                    <div class="box shadow-sm bg-light">
                                        <button
                                            className="btn btn-dark col-12"
                                            disabled={
                                                status === 'DELIVERED' || status === 'CANCELLED'
                                            }
                                            onClick={() =>
                                                handleUpdateStatus(order.id, 'DELIVERED')
                                            }
                                        >
                                            Đã giao
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </>
    );
}

export default OrderDetail;
