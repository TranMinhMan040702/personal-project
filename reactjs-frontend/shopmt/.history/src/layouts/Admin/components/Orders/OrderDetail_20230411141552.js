import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
function OrderDetail() {
    return (
        <>
            <div className="content-header">
                <Link className="btn btn-dark text-white">Trở lại</Link>
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
                        <div className="col-lg-6">
                            <span className="icon icon-sm rounded-circle alert-success">
                                <FontAwesomeIcon className="text-success" icon={faUser} />
                            </span>
                            <div className="text">
                                <h6 className="mb-1">Khách hàng</h6>
                                <p className="mb-1">
                                    Trần Minh Mẫn <br />
                                    <Link>man@gmail.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
