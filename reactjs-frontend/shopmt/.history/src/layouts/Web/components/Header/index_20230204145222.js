import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';

import images from '../../../../assets/images';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="pc-header">
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
                                <input type="search" className="form-control search" placeholder="Search" />
                                <button type="submit" className="search-button">
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end align-items-center register-login-cart">
                            <Link>
                                <FontAwesomeIcon className="cart" icon={faCartShopping} />
                                <span className="badge">0</span>
                            </Link>
                            <Link>REGISTER</Link>
                            <Link>LOGIN</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
