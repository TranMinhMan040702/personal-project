import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
function Navbar() {
    return (
        <ul>
            <li>
                <Link>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Tài khoản của tôi</span>
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
