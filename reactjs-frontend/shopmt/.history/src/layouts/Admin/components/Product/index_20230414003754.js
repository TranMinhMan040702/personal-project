import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductService from '../../../../services/ProductService';
import config from '../../../../config';
import Padding from '../../../../components/Padding';
import { convertParams } from '../../../../utils';
import './product.scss';
function Product() {
    const [checked, setChecked] = useState(true);
    const [products, setProducts] = useState([]);
    const [params, setParams] = useState({
        categoryId: '',
        page: '',
        limit: '',
        sortBy: '',
        search: '',
    });

    console.log(convertParams(params));

    useEffect(() => {
        ProductService.getProducts()
            .then((resp) => {
                setProducts(resp.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, [checked]);

    const DeleteProduct = async (e) => {
        e.preventDefault();
        const id = e.target.attributes[0].value;
        await ProductService.deleteProduct(id)
            .then((resp) => {
                setChecked((prev) => (prev = !prev));
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    return (
        <div className="containter-fluld">
            <div className="content-header d-flex justify-content-between align-items-center">
                <div className="title">
                    <h2>Products</h2>
                </div>
                <Link to={config.routes.admin.addProduct} className="btn btn-success">
                    Create new
                </Link>
            </div>
            <div className="card shadow-sm">
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
                        {products.length > 0 ? (
                            products.map((product) => {
                                return (
                                    <div className="col-lg-3 mb-5">
                                        <div className="card shadow-sm">
                                            <Link className="img-wrap">
                                                <img src={product.images[0]} alt="product" />
                                            </Link>
                                            <div className="info-wrap">
                                                <Link className="title text-truncate">
                                                    {product.name}
                                                </Link>
                                                <div className="price">
                                                    <span className=" original-price">
                                                        {product.price}
                                                    </span>
                                                    <span className="discount-price">
                                                        {product.promotionalPrice}
                                                    </span>
                                                </div>
                                                <div className="row d-flex">
                                                    <Link
                                                        to={
                                                            config.routes.admin.product +
                                                            '/' +
                                                            product.id
                                                        }
                                                        data={product.id}
                                                        // onClick={(e) => EditProduct(e)}
                                                        className="btn btn-outline-success p-2 col-6"
                                                    >
                                                        <FontAwesomeIcon icon={faPenAlt} />
                                                    </Link>
                                                    <button
                                                        data={product.id}
                                                        onClick={(e) => DeleteProduct(e)}
                                                        className="btn btn-outline-danger p-2 col-6"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>No product</p>
                        )}
                    </div>
                    <Padding />
                </div>
            </div>
        </div>
    );
}

export default Product;
