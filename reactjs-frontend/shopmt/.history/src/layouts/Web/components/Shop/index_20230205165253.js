import Categories from './Categories';
import './shop.scss';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
                <div className="content-width">
                    <div className="row">
                        <div className="col-md-2">
                            <h2>Sản phẩm</h2>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
