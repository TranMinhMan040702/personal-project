import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.scss';
import images from '../../../assets/images';
import {
    faBagShopping,
    faBook,
    faCartShopping,
    faHome,
    faList,
    faStoreAlt,
    faUsd,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

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
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faBook} />
                            <span>Product</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span>Add Product</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faList} />
                            <span>Categories</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faStoreAlt} />
                            <span>Seller</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon icon={faUsd} />
                            <span>Transactions</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
