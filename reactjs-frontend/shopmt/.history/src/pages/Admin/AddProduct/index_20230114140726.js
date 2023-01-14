import './addProduct.scss';
import { Link } from 'react-router-dom';
function AddProduct() {
    return (
        <div className="product">
            <div className="content-header d-flex justify-content-between">
                <div className="title">
                    <h2>Add Product</h2>
                </div>
                <Link className="btn btn-danger">Go to products</Link>
            </div>
            <div className="card shadow-sm"></div>
        </div>
    );
}

export default AddProduct;
