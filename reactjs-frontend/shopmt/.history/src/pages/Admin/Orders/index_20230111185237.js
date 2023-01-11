function Orders() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Orders</h2>
            </div>
            <div className="card mb-4 shadow-sm">
                <div className="card-header bg-white">
                    <div className="row py-3">
                        <div className="col-4">
                            <input className="form-control" type="text" placeholder="Search...." />
                        </div>
                        <div className="col-2">
                            <select className="" name="status" id="">
                                <option value="ALL">ALL</option>
                                <option value="NOT_PROCESSED">NOT_PROCESSED</option>
                                <option value="PROCESSING">PROCESSING</option>
                                <option value="SHIPPED">SHIPPED</option>
                                <option value="DELIVERED">DELIVERED</option>
                                <option value="CANCELLED">CANCELLED</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <select name="show" id="">
                                <option value="20">Show 20</option>
                                <option value="30">Show 30</option>
                                <option value="40">Show 40</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="center"></div>
            </div>
        </div>
    );
}

export default Orders;
