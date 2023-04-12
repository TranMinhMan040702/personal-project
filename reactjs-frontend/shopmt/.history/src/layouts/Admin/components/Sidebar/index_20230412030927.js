import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './sidebar.scss';
import images from '../../../../assets/images';
import config from '../../../../config';
import { useEffect } from 'react';

function Sidebar() {
    const location = useLocation()['pathname'];
    const navigate = useNavigate();
    console.log(location);

    useEffect(() => {});

    const handleClick = (e) => {
        e.preventDefault();
        handleActive();
        navigate(location);
    };

    const handleActive = () => {
        const tags = document.getElementsByClassName('link-sidebar');
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].classList.contains('active')) {
                tags[i].classList.remove('active');
            }
            if (tags[i].href.includes(location)) {
                tags[i].classList.add('active');
            }
        }
    };

    return (
        <div className="sidebar">
            <div className="top">
                <Link
                    onClick={(e) => handleClick(e)}
                    to={config.routes.admin.home}
                    style={{ textDecoration: 'none' }}
                >
                    <img src={images.logo} alt="logo" />
                </Link>
            </div>
            <div className="center">
                <ul className="menu-aside" style={{ listStyle: 'none' }}>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.home}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faHome} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar active"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.product}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faBook} />
                            <span>Product</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.addProduct}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faCartShopping} />
                            <span>Add Product</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.category}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faList} />
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.orders + '?state=ALL'}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faBagShopping} />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.users}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faUser} />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.delivery}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faTruck} />
                            <span>Delivery</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.seller}
                            style={{ textDecoration: 'none' }}
                        >
                            <FontAwesomeIcon className="sidebar-icon" icon={faStoreAlt} />
                            <span>Seller</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link
                            className="link-sidebar"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.admin.transactions}
                            style={{ textDecoration: 'none' }}
                        >
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
