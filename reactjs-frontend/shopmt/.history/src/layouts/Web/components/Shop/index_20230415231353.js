/* eslint-disable react-hooks/exhaustive-deps */
import Categories from './Categories';
import ProductCard from '../ProductCard';
import Loading from '../../../../components/Loading';
import Padding from '../../../../components/Padding';
import Empty from '../../../../components/Empty';
import ProductService from '../../../../services/ProductService';
import { convertParams } from '../../../../utils';
import { useContext, useEffect, useState } from 'react';
import images from '../../../../assets/images';
import { RequestParamContext } from '../../../../context';
import './shop.scss';

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { params, setParams } = useContext(RequestParamContext);
    const [pagination, setPagination] = useState({
        page: '',
        limit: '',
        totalPage: '',
    });

    useEffect(() => {
        getProducts(convertParams(params));
    }, [params]);
    const getProducts = async (requestParam) => {
        try {
            const response = await ProductService.getProducts(requestParam);
            setProducts(response.data.products);
            setPagination({
                page: response.data.page,
                limit: response.data.limit,
                totalPage: response.data.totalPage,
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) => {
        setParams((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // pagination
    const handleClickPrevious = () => {
        setParams((prev) => {
            return { ...prev, page: prev.page - 1 };
        });
    };
    const handleClickNext = () => {
        setParams((prev) => {
            return { ...prev, page: prev.page + 1 };
        });
    };
    const handleClickPage = () => {
        setParams((prev) => {
            return { ...prev, page: pagination.page };
        });
    };
    console.log(params);
    return (
        <div className="shop">
            {!loading ? (
                <div className="container d-flex justify-content-between">
                    <Categories params={params} setParams={setParams} />
                    <div className="shopcards product">
                        {products.length > 0 ? (
                            <>
                                <div className="header">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-md-6">
                                            <h4>Sản phẩm</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <select
                                                class="form-select form-select-sm"
                                                name="sortBy"
                                                onChange={(e) => handleChange(e)}
                                            >
                                                <option value="createdAt">Mới nhất</option>
                                                <option value="sold">Bán chạy nhất</option>
                                                <option value="">Bán chạy nhất tháng</option>
                                                <option value="">Bán chạy nhất năm</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <select
                                                class="form-select form-select-sm"
                                                name="limit"
                                                onChange={(e) => handleChange(e)}
                                            >
                                                <option value="" selected>
                                                    Tất cả
                                                </option>
                                                <option value="12">12 sản phẩm</option>
                                                <option value="24">24 sản phẩm</option>
                                                <option value="48">48 sản phẩm</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="row">
                                        {products.map((product) => {
                                            return (
                                                <div className="col-lg-4">
                                                    <ProductCard product={product} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <Padding
                                    pagination={pagination}
                                    setPagination={setPagination}
                                    handleClickPrevious={handleClickPrevious}
                                    handleClickNext={handleClickNext}
                                    handleClickPage={handleClickPage}
                                />
                            </>
                        ) : (
                            <Empty title="Không có sản phẩm" image={images.productEmpty} />
                        )}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Shop;
