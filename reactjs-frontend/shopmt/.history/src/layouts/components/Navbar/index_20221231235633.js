import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" className="form-control" placeholder="Search term" />
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
