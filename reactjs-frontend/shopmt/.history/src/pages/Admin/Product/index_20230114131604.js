import { Link } from 'react-router-dom';
function Product() {
    return (
        <div className="containter-fluld">
            <div className="content-header d-flex justify-content-between align-items-center">
                <div className="title">
                    <h2>Products</h2>
                </div>
                <Link className="btn btn-success">Create new</Link>
            </div>
            <div className="card">
                <div className="card-header bg-white">
                    <div className="row gx-3 py-2">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input className="form-control" type="text" placeholder="Search...." />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select" name="status" id="">
                                <option value="ALL">All category</option>
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
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <Link className="img-wrap">
                                    <img src="" alt="" />
                                </Link>
                                <div className="info-wrap">
                                    <Link>Nhà Giả Kim</Link>
                                    <div className="price">
                                        <span className="discount-price">30000 vnđ</span>
                                        <span className="original-price">60000 vnđ</span>
                                    </div>
                                    <div className="row">
                                        <Link className="btn btn-outline-success"></Link>
                                        <Link></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
