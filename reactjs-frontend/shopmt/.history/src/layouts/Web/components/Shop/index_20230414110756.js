import Categories from './Categories';
import ProductCard from '../ProductCard';
import Loading from '../../../../components/Loading';
import Padding from '../../../../components/Padding';
import ProductService from '../../../../services/ProductService';
import { convertParams } from '../../../../utils';
import { useEffect, useState } from 'react';
import './shop.scss';

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useState({
        categoryId: '',
        page: '',
        limit: '',
        sortBy: '',
        search: '',
    });
    useEffect(() => {
        getProducts(convertParams(params));
    }, [params]);
    const getProducts = async (requestParam) => {
        try {
            const response = await ProductService.getProducts(requestParam);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="shop">
            {!loading ? (
                <div className="container d-flex justify-content-between">
                    <Categories params={params} setParams={setParams} />
                    <div className="shopcards product">
                        <div className="header">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-6">
                                    <h4>Sản phẩm</h4>
                                </div>
                                <div className="col-md-3">
                                    <select class="form-select form-select-sm">
                                        <option value="64">Mới nhất</option>
                                        <option value="12" selected>
                                            Bán chạy nhất tuần
                                        </option>
                                        <option value="24">Bán chạy nhất tháng</option>
                                        <option value="48">Bán chạy nhất năm</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select class="form-select form-select-sm">
                                        <option value="12" selected>
                                            12 sản phẩm
                                        </option>
                                        <option value="24">24 sản phẩm</option>
                                        <option value="48">48 sản phẩm</option>
                                        <option value="64">64 sản phẩm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="product-content">
                            <div className="row">
                                {products &&
                                    products.map((product) => {
                                        return (
                                            <div className="col-lg-4">
                                                <ProductCard product={product} />
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                        <Padding />
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Shop;
