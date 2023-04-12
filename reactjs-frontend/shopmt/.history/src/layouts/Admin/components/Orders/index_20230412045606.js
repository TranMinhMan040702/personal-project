import OrdersTable from './OrdersTable';
import OrderDetail from './OrderDetail';
import './orders.scss';
import { useParams } from 'react-router-dom';

function Orders() {
    const param = useParams()['slug'];

    return (
        <div className="container-fluid">
            {!param ? <OrdersTable /> : <OrderDetail orderId={param} />}
        </div>
    );
}

export default Orders;
