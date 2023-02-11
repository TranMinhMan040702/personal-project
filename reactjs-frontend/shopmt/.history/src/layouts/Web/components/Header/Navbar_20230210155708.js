import { faBorderAll, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <header className="header d-flex">
            <div className="container d-flex align-items-center  justify-content-center">
                {/* <div className="categorise d-flex align-items-center">
                    <span>
                        <FontAwesomeIcon icon={faBorderAll} />
                    </span>
                    <h4>
                        Categorise
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </h4>
                </div> */}
                <div className="navlink">
                    <ul className="d-flex align-items-center">
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
