import Categories from './Categories';
import ProductCard from '../ProductCard';
import Padding from '../../../../components/Padding';
import './shop.scss';
import ProductService from '../../../../services/ProductService';
import { useState } from 'react';
function Shop() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await ProductService.getProducts();
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
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
                            <div className="col-lg-4">
                                <ProductCard />
                            </div>
                        </div>
                    </div>

                    <Padding />
                </div>
            </div>
        </div>
    );
}

export default Shop;
