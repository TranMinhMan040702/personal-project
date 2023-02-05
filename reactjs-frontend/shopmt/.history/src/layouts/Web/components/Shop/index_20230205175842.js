import Categories from './Categories';

import './shop.scss';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
                <div className="shopcards">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Sản phẩm</h4>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="row">
                            <div className="col-lg-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
