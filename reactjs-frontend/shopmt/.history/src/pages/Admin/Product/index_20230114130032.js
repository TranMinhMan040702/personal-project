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
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-3"></div>
                        <div className="col-lg-3"></div>
                    </div>
                </div>
                <div className="card-body"></div>
            </div>
        </div>
    );
}

export default Product;
