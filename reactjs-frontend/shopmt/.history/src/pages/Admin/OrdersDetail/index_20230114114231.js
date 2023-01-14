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
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body"></div>
            </div>
        </div>
    );
}

export default OrdersDetail;
