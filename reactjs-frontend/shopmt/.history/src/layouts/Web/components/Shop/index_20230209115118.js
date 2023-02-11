import Categories from './Categories';
import ProductCard from '../ProductCard';
import './shop.scss';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
                <div className="shopcards product">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Sản phẩm</h4>
                            </div>
                            <div className="col-md-6">
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
                </div>
            </div>
        </div>
    );
}

export default Shop;
