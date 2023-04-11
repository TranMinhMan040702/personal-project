import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faPrint, faTruck, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';
import images from '../../../../assets/images';
function OrderDetail() {
    return (
        <>
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
                                <b className="text-white">Dec 12 2021</b>
                            </span>
                            <small className="text-white mx-3">Order ID: 1245780075gh54</small>
                        </div>
                        <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                            <select
                                className="form-select d-inline-block"
                                style={{ maxWidth: '200px' }}
                            >
                                <option>Chưa xử lý</option>
                                <option>Đang xử lý</option>
                                <option>Đang giao</option>
                                <option>Đã giao</option>
                                <option>Xóa đơn</option>
                            </select>
                            <Link className="btn btn-success ms-2">
                                <FontAwesomeIcon icon={faPrint} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row mb-5 order-info-wrap">
                        <div className="col-lg-6 d-flex align-items-center">
                            <span className="icon icon-sm rounded-circle alert-success">
                                <FontAwesomeIcon className="text-success" icon={faUserAlt} />
                            </span>
                            <div className="text">
                                <h6 className="mb-1">Khách hàng</h6>
                                <p>
                                    Trần Minh Mẫn <br />
                                    <Link>man@gmail.com</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <span className="icon icon-sm rounded-circle alert-success">
                                <FontAwesomeIcon className="text-success" icon={faTruck} />
                            </span>
                            <div className="text">
                                <h6 className="mb-1">Giao hàng đến</h6>
                                <p>
                                    Địa chỉ: <br />
                                    Tân lập, Tịnh Biên, An Giang
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sản phẩm</th>
                                        <th scope="col">Giá</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="img">
                                                    <img
                                                        src={images.products.p1}
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
                                                    Nhà giả kim
                                                </div>
                                            </div>
                                        </td>
                                        <td className="">
                                            <div className='<div className="d-flex align-items-center">'>
                                                70.000vnd
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td>210.000cnd</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4">
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
                                                        $3,556
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
                                                        $56,907
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
                                                        <b class="h5">$2,345</b>
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
                                                        <span class="badge rounded-pill alert alert-success text-success">
                                                            Payment done
                                                        </span>
                                                    </d>
                                                </dl>
                                            </article>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
