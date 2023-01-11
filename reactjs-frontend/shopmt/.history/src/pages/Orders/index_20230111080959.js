import './orders.scss';
function Orders() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Orders</h2>
            </div>
            <div className="content-main">
                <div className="top">
                    <div className="search">
                        <input type="text" placeholder="Search...." />
                    </div>
                    <div className="filter">
                        <select name="status" id="">
                            <option value="ALL">ALL</option>
                            <option value="NOT_PROCESSED">NOT_PROCESSED</option>
                            <option value="PROCESSING">PROCESSING</option>
                            <option value="SHIPPED">SHIPPED</option>
                            <option value="DELIVERED">DELIVERED</option>
                            <option value="CANCELLED">CANCELLED</option>
                        </select>
                    </div>
                </div>
                <div className="center"></div>
            </div>
        </div>
    );
}

export default Orders;
