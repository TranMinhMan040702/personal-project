import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" className="form-control" placeholder="Search term" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="item"></div>
            </div>
        </div>
    );
}

export default Navbar;
