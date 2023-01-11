function Delivery() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Delivery</h2>
            </div>
            <div className="card mb-4 shadow-sm bg-white">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <form action="">
                                <div class="mb-3">
                                    <label for="categoryid" class="form-label">
                                        Category Id
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="categoryid"
                                        required
                                        placeholder="Enter category"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="price"
                                        required
                                        placeholder="Enter product price"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-8">List</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Delivery;
