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
                    <div className="filter"></div>
                </div>
                <div className="center"></div>
            </div>
        </div>
    );
}

export default Orders;
