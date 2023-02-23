import { faBell, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../hooks';
import './navbar.scss';
import images from '../../../../assets/images';

function Navbar() {
    const {setAuth} = useAuth();
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
                                <a class="dropdown-item" href="#">
                                    My Profile
                                </a>
                            </li>
                            <li>
                                <Link onClick={} class="dropdown-item">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
