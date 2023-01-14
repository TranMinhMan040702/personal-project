import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
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
                    </div>
                </div>
                <div className="card-body"></div>
            </div>
        </div>
    );
}

export default OrdersDetail;
