import Categories from './Categories';
import './shop.scss';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
                <div className="shopcarts">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Sản phẩm</h5>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
