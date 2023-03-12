import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../../../hooks';
import images from '../../../../assets/images';
import { faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';
import { useSelector } from 'react-redux';
import { cartUser, accountUser } from '../../../../redux/selectors';
import { current } from '@reduxjs/toolkit';
function Search() {
    const { auth, setAuth } = useAuth();
    const cart = useSelector(cartUser);
    const account = useSelector(accountUser);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        setAuth({});
    };
    const handleTotalCartItems = (cart) => {
        if (cart.length > 0) {
            return cart.reduce((acc, cur) => acc + current.count, 0);
        }
        return 0;
    };
    console.log(cart);
    return (
        <div className="search">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to={config.routes.web.home} className="header-logo d-flex align-items-center">
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
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div className="cart">
                            <Link to={config.routes.web.cart}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className="badge">{handleTotalCartItems(cart)}</span>
                            </Link>
                        </div>
                        <div className="user">
                            {auth.email ? (
                                <>
                                    <div className="user-img">
                                        <img src={images.noAvatar} alt="" />
                                    </div>
                                    <span>{account && `${account.firstname} ${account.lastname}`}</span>
                                    <div className="dropdown">
                                        <ul>
                                            <li>
                                                <Link to={`${config.routes.web.user}/profile`}>Tài khoản của tôi</Link>
                                            </li>
                                            <li>
                                                <Link to={`${config.routes.web.user}/purchase`}>Đơn hàng</Link>
                                            </li>
                                            <li>
                                                <Link onClick={(e) => handleLogout(e)}>Đăng xuất</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <Link to={config.routes.web.login}>Đăng nhập</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
