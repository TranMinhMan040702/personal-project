import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
function Navbar() {
    return (
        <ul>
            <li>
                <Link>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Tài khoản của tôi</span>
                </Link>
                <ul>
                    <li>
                        <Link>Hồ sơ</Link>
                    </li>
                    <li>
                        <Link>Đổi mật khẩu</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link>
                    <FontAwesomeIcon icon={faRectangleList} />
                    <span>Đơn mua</span>
                </Link>
            </li>
            <li>
                <Link>
                    <FontAwesomeIcon icon={faBell} />
                    <span>Thông báo</span>
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
