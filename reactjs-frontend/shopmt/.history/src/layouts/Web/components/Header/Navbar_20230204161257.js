import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <div className="categorise">
                    <span>
                        <FontAwesomeIcon icon={faBorderAll} />
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
