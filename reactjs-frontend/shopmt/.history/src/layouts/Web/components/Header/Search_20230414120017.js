import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../../../hooks';
import images from '../../../../assets/images';
import { faBell, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';
import { useSelector } from 'react-redux';
import { cartUser, accountUser } from '../../../../redux/selectors';
import accountSlice from '../../../../redux/slice/accountSlice';
import cartSlice from '../../../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { RequestParamContext } from '../../../../context';

function Search() {
    const cart = useSelector(cartUser);
    const account = useSelector(accountUser);
    const dispath = useDispatch();
    const { auth, setAuth } = useAuth();
    const { params, setParams } = useContext(RequestParamContext);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        dispath(accountSlice.actions.clearedAccount({}));
        dispath(cartSlice.actions.clearedCart({}));
        setAuth({});
    };
    const handleTotalCartItems = (cart) => {
        if (cart.length > 0) {
            return cart.reduce((acc, cur) => acc + cur.count, 0);
        }
        return 0;
    };
    const handleAvatar = () => {
        return account.avatar ? account.avatar : images.noAvatar;
    };
    const handleSearch = (e) => {
        const tag = document.getElementById('search-main');
        console.log(tag);
    };
    return (
        <div className="search">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link
                            to={config.routes.web.home}
                            className="header-logo d-flex align-items-center"
                        >
                            <img className="img-logo" src={images.logoweb} alt="" />
                            <div className="logo-title">
                                <span>BooksMT</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 d-flex" style={{ height: '34px' }}>
                        <input
                            type="search"
                            name="search"
                            className="form-control "
                            id="search-main"
                            placeholder="Tìm kiếm sản phẩm . . . ."
                        />
                        <button
                            onClick={(e) => handleSearch(e)}
                            className="search-button mx-1"
                            style={{ borderRadius: '3px' }}
                        >
                            Search
                        </button>
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
                                        <img src={handleAvatar()} alt="" />
                                    </div>
                                    <span>
                                        {account && `${account.firstname} ${account.lastname}`}
                                    </span>
                                    <div className="dropdown">
                                        <ul>
                                            <li>
                                                <Link to={`${config.routes.web.user}/profile`}>
                                                    Tài khoản của tôi
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={`${config.routes.web.user}/purchase?state=ALL`}
                                                >
                                                    Đơn hàng
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={(e) => handleLogout(e)}>
                                                    Đăng xuất
                                                </Link>
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
