import { faBorderAll, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <header className="header">
            <div className="container d-flex">
                <div className="categorise d-flex align-items-center">
                    <span>
                        <FontAwesomeIcon icon={faBorderAll} />
                    </span>
                    <h4>
                        Categorise
                        <FontAwesomeIcon className="icon" icon={faChevronDown} />
                    </h4>
                </div>
            </div>
            <div className="navlink">
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/pages">pages</Link>
                    </li>
                    <li>
                        <Link to="/user">user account</Link>
                    </li>
                    <li>
                        <Link to="/vendor">vendor account</Link>
                    </li>
                    <li>
                        <Link to="/track">track my order</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
