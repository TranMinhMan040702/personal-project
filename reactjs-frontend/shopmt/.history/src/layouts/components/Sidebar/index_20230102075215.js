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
import routes from '../../../config/routes';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to={routes.admin.home} style={{ textDecoration: 'none' }}>
                    <img src={images.logo} alt="logo" />
                </Link>
            </div>
            <div className="center">
                <ul style={{ listStyle: 'none' }}>
                    <Link to={routes.admin.home} style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faHome} />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to={routes.admin.product} style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faBook} />
                            <span>Product</span>
                        </li>
                    </Link>
                    <Link to={routes.admin.addProduct} style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faCartShopping} />
                            <span>Add Product</span>
                        </li>
                    </Link>
                    <Link to={{routes.admin.category}} style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faList} />
                            <span>Categories</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faBagShopping} />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faUser} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faStoreAlt} />
                            <span>Seller</span>
                        </li>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <FontAwesomeIcon className="sidebar-icon" icon={faUsd} />
                            <span>Transactions</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
