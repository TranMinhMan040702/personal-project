import Categories from './Categories';
import { Link } from 'react-router-dom';

import './shop.scss';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
                <div className="shopcarts">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Sản phẩm</h4>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="col-lg-3 mb-5">
                                    <div className="card shadow-sm">
                                        <Link className="img-wrap">
                                            <img src={PRODUCT_URL + '\\' + product.images[0]} alt="product" />
                                        </Link>
                                        <div className="info-wrap">
                                            <Link className="title text-truncate">{product.name}</Link>
                                            <div className="price">
                                                <span className=" original-price">{product.price}</span>
                                                <span className="discount-price">{product.promotionalPrice}</span>
                                            </div>
                                            <div className="row d-flex">
                                                <Link
                                                    to={config.routes.admin.product + '/' + product.id}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
