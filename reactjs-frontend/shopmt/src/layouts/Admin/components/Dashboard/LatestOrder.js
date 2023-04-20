import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatter } from '../../../../utils';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../../../config';

function LastestOrder({ orders }) {
    const handleDate = (timeStamp) => {
        const date = new Date(timeStamp);
        return date.toDateString();
    };
    const handleStatus = (status) => {
        switch (status) {
            case 'NOT_PROCESSED':
                return <span className="badge not-process">Chưa xử lý</span>;
            case 'PROCESSING':
                return <span className="badge processing">Đang xử lý</span>;
            case 'SHIPPED':
                return <span className="badge shipped">Đang giao</span>;
            case 'DELIVERED':
                return <span className="badge delivered">Đã giao</span>;
            case 'CANCELLED':
                return <span className="badge cancelled">Đã hủy</span>;
            default:
                return <span className="badge not-process">Đang xử lý</span>;
        }
    };
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Total</th>
                    <th scope="col">Paid</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>
                                <b>{order.user.firstname + ' ' + order.user.lastname}</b>
                            </td>
                            <td>{order.phone}</td>
                            <td>{order.address}</td>
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
                                <Link to={config.routes.admin.orders + '/' + order.id}>
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default LastestOrder;
