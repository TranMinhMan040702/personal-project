import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
function OrderDetail() {
    return (
        <>
            <div className="content-header">
                <Link className="btn btn-dark text-white">Trở lại</Link>
            </div>
            <div className="card">
                <div className="card-header p-3" style={{ backgroundColor: '#4fa607' }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <span>
                                <FontAwesomeIcon className="mx-3" icon={faCalendarDays} />
                                <b className="text-white">Dec 12 2021</b>
                            </span>
                            <small className="text-white mx-3">Order ID: 1245780075gh54</small>
                        </div>
                        <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                            <select
                                class="form-select d-inline-block"
                                fdprocessedid="xsngzs"
                                style={{ maxWidth: '200px' }}
                                // style="max-width: 200px;"
                            >
                                <option>Change status</option>
                                <option>Awaiting payment</option>
                                <option>Confirmed</option>
                                <option>Shipped</option>
                                <option>Delivered</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
