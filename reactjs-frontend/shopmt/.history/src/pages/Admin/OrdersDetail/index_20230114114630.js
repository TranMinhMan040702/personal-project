import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPrint } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function OrdersDetail() {
    return (
        <div className="container-fluid">
            <div className="content-header"></div>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <span>
                                <FontAwesomeIcon icon={faCalendar} />
                                <b>Dec 12 2021</b>
                            </span>
                            <br />
                            <small>Order ID: 12345678</small>
                        </div>
                        <div className="col-lg-6">
                            <select className="form-select" name="status" id="">
                                <option value="ALL">ALL</option>
                                <option value="NOT_PROCESSED">NOT_PROCESSED</option>
                                <option value="PROCESSING">PROCESSING</option>
                                <option value="SHIPPED">SHIPPED</option>
                                <option value="DELIVERED">DELIVERED</option>
                                <option value="CANCELLED">CANCELLED</option>
                            </select>
                            <Link>
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
