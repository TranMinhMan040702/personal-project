import Categories from './Categories';
import './shop.scss';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
                <div className="content-width">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Sản phẩm</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
