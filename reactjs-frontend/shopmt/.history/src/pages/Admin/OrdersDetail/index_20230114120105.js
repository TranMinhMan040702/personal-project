import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPrint } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function OrdersDetail() {
    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center" style={{ 'margin-bottom': '30px' }}>
                <Link className="btn btn-dark">Back To Oders</Link>
            </div>
            <div className="card">
                <div className="card-header p-3" style={{ 'background-color': '#4fa607' }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <span>
                                <FontAwesomeIcon icon={faCalendarAlt} className="mx-2" />
                                <b className="text-white">Dec 12 2021</b>
                            </span>
                            <br />
                            <small className="text-white">Order ID: 12345678</small>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end align-items-center">
                            <select
                                className="form-select d-inline-block"
                                name="status"
                                id=""
                                style={{ maxWidth: '200px' }}
                            >
                                <option value="ALL">ALL</option>
                                <option value="NOT_PROCESSED">NOT_PROCESSED</option>
                                <option value="PROCESSING">PROCESSING</option>
                                <option value="SHIPPED">SHIPPED</option>
                                <option value="DELIVERED">DELIVERED</option>
                                <option value="CANCELLED">CANCELLED</option>
                            </select>
                            <Link className="btn btn-success ms-2">
                                <FontAwesomeIcon icon={faPrint} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body"></div>
            </div>
        </div>
    );
}

export default OrdersDetail;
