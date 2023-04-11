import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
function OrderDetail() {
    return (
        <>
            <div className="content-header">
                <Link className="btn btn-dark text-white">Trở lại</Link>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <span>
                                <FontAwesomeIcon icon={faCalendar} />
                                <b className="text-white">Dec 12 2021</b>
                            </span>
                            <small className="text-white mx-3">Order ID: 1245780075gh54</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
