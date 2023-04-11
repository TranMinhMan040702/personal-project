import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { formatter } from '../../../../utils';
import Loading from '../../../../components/Loading';
function OrdersTable() {
    return (
        <>
            <div className="title">
                <h2>Orders</h2>
            </div>
            <div className="card mb-4 mt-3 shadow-sm">
                <div className="card-header bg-white">
                    <div className="row gx-3 py-2">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input className="form-control" type="text" placeholder="Search...." />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select" name="status" id="">
                                <option value="ALL">ALL</option>
                                <option value="NOT_PROCESSED">NOT_PROCESSED</option>
                                <option value="PROCESSING">PROCESSING</option>
                                <option value="SHIPPED">SHIPPED</option>
                                <option value="DELIVERED">DELIVERED</option>
                                <option value="CANCELLED">CANCELLED</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select" name="show" id="">
                                <option value="20">Show 20</option>
                                <option value="30">Show 30</option>
                                <option value="40">Show 40</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Total</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <Loading />
                            ) : (
                                orders.map((order, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>
                                                <b>
                                                    {order.user.firstname +
                                                        ' ' +
                                                        order.user.lastname}
                                                </b>
                                            </td>
                                            <td>{order.user.email}</td>
                                            <td>{formatter(order.amountFromUser)}</td>
                                            <td>
                                                {order.paidBefore ? (
                                                    <span
                                                        className="badge alert-success"
                                                        style={{ borderRadius: '50rem' }}
                                                    >
                                                        Đã thanh toán
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="badge alert-danger"
                                                        style={{ borderRadius: '50rem' }}
                                                    >
                                                        Chưa thanh toán
                                                    </span>
                                                )}
                                            </td>
                                            <td>{handleDate(order.createdAt)}</td>
                                            <td>{handleStatus(order.status)}</td>
                                            <td>
                                                <Link>
                                                    <FontAwesomeIcon icon={faEye} />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default OrdersTable;
