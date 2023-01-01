import { faBell, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';

function Navbar() {
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
                    <div className=" item">
                        <div class="dropdown">
                            <button
                                class="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
