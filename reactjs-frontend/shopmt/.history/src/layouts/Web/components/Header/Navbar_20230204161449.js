import { faBorderAll, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <div className="categorise d-flex">
                    <span>
                        <FontAwesomeIcon icon={faBorderAll} />
                    </span>
                    <h4>
                        Categorise
                        <FontAwesomeIcon icon={faChevronDown} />
                    </h4>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
