import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../../assets/images';
import { faBell, faCartShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';
function Search() {
    return (
        <div className="search">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link className="header-logo d-flex align-items-center">
                            <img className="img-logo" src={images.logoweb} alt="" />
                            <div className="logo-title">
                                <span>BooksMT</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <form className="input-group">
                            <input type="search" className="form-control" placeholder="Tìm kiếm sản phẩm . . . ." />
                            <button type="submit" className="search-button">
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="col-md-3 d-flex justify-content-end align-items-center">
                        <div className="notify">
                            <Link>
                                <FontAwesomeIcon icon={faBell} />
                            </Link>
                        </div>
                        <div className="cart">
                            <Link to={config.routes.web.cart}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className="badge">0</span>
                            </Link>
                        </div>
                        <Link className="user">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
