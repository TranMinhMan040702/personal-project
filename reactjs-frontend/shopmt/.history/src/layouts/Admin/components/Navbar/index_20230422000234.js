import { faBell, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks';
import './navbar.scss';
import images from '../../../../assets/images';
import AuthService from '../../../../services/AuthService';

function Navbar() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        logout({
            tokenRefresh: localStorage.getItem('refreshToken'),
            userId: localStorage.getItem('userId'),
        });
        setAuth({});
        navigate('/login', { replace: true });
    };
    const logout = async (tokenRequest) => {
        try {
            await AuthService.logout(tokenRequest);
            localStorage.clear();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" className="form-control" placeholder="Search term" />
                    <div className="icon-search">
                        <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className="items">
                    <div className="item">
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="item">
                        <span>English</span>
                    </div>
                    <div class="dropdown">
                        <div
                            class="avatar"
                            type="button"
                            id="dropdownAccount"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img className="w-100 h-100" src={images.noAvatar} alt="" />
                        </div>
                        <ul
                            class="dropdown-menu dropdown-menu-lg-end dropdown-account"
                            aria-labelledby="dropdownAccount"
                        >
                            <li>
                                <Link class="dropdown-item">My Profile</Link>
                            </li>
                            <li>
                                <Link onClick={(e) => handleLogout(e)} class="dropdown-item">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
