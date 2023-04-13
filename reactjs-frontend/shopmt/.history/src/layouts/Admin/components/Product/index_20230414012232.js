import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { convertParams } from '../../../../utils';
import ProductService from '../../../../services/ProductService';
import CategoryService from '../../../../services/CategoryService';
import Loading from '../../../../components/Loading';
import Empty from '../../../../components/Empty';
import config from '../../../../config';
import Padding from '../../../../components/Padding';
import './product.scss';
function Product() {
    const [checked, setChecked] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useState({
        categoryId: '',
        page: '',
        limit: '',
        sortBy: '',
        search: '',
    });

    useEffect(() => {
        getAllCategory();
    }, []);

    useEffect(() => {
        getAllProducts(convertParams(params));
        setLoading(false);
    }, [params, checked]);

    const getAllProducts = async (requestParams) => {
        try {
            const response = await ProductService.getProducts(requestParams);
            setProducts(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getAllCategory = async () => {
        try {
            const response = await CategoryService.getAllCategories();
            setCategories(response.data);
        } catch (err) {
            console.log(err);
        }
    };

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

    const handleChange = (e) => {
        setParams((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
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
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search...."
                                        name="search"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="col-lg-2 col-6 col-md-3">
                                    <select
                                        className="form-select"
                                        name="categoryId"
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option value="">Tất cả</option>
                                        {categories &&
                                            categories.map((category) => {
                                                return (
                                                    <option value={category.id}>
                                                        {category.name}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>
                                <div className="col-lg-2 col-6 col-md-3">
                                    <select
                                        className="form-select"
                                        name="limit"
                                        onChange={(e) => handleChange(e)}
                                    >
                                        <option value="20">20 sản phẩm</option>
                                        <option value="30">30 sản phẩm</option>
                                        <option value="40">40 sản phẩm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {products.length > 0 ? (
                                <div className="row">
                                    {products.map((product) => {
                                        return (
                                            <div className="col-lg-3 mb-5">
                                                <div className="card shadow-sm">
                                                    <Link className="img-wrap">
                                                        <img
                                                            src={product.images[0]}
                                                            alt="product"
                                                        />
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
                                    })}
                                    <Padding />
                                </div>
                            ) : (
                                <Empty />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Product;
