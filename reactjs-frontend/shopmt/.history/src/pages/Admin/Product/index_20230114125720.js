import { Link } from 'react-router-dom';
function Product() {
    return (
        <div className="containter-fluld">
            <div className="content-header d-flex justify-content-between align-items-center">
                <div className="title">
                    <h2>Product</h2>
                </div>
                <Link className="btn btn-success">Create new</Link>
            </div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body"></div>
            </div>
        </div>
    );
}

export default Product;
