import Categories from './Categories';
import './shop.scss';
function Shop() {
    return (
        <div className="shop">
            <div className="container d-flex justify-content-between">
                <Categories />
            </div>
        </div>
    );
}

export default Shop;
