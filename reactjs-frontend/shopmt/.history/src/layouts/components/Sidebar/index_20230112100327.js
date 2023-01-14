import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faBook,
    faCartShopping,
    faHome,
    faList,
    faStoreAlt,
    faTruck,
    faUsd,
} from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';
import images from '../../../assets/images';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import config from '../../../config';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to={config.routes.admin.home} style={{ textDecoration: 'none' }}>
                    <img src={images.logo} alt="logo" />
                </Link>
            </div>
            <div className="center">
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <Link to={config.routes.admin.home} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faHome} />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={config.routes.admin.product} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faBook} />
                            <span>Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={config.routes.admin.addProduct} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faCartShopping} />
                            <span>Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={config.routes.admin.category} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faList} />
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={config.routes.admin.orders} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faBagShopping} />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={config.routes.admin.users} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faUser} />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={config.routes.admin.delivery} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faTruck} />
                            <span>Delivery</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={config.routes.admin.seller} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faStoreAlt} />
                            <span>Seller</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={config.routes.admin.transactions} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon className="sidebar-icon" icon={faUsd} />
                            <span>Transactions</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
