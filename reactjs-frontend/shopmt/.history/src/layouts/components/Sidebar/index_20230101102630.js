import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.scss';
import images from '../../../assets/images';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={images.logo} alt="logo" />
                </Link>
            </div>
            <div className="center">
                <ul style={{ listStyle: 'none' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <span>Users</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
