import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
import images from '../../../../assets/images';
function Navbar() {
    return (
        <>
            <div className="top">
                <div className="img">
                    <img src={images.noAvatar} alt="" />
                </div>
            </div>
            <ul>
                <li>
                    <Link>
                        <FontAwesomeIcon className="icon" icon={faUser} style={{ color: '#0045b0' }} />
                        <span>Tài khoản của tôi</span>
                    </Link>
                    <li>
                        <Link>Hồ sơ</Link>
                    </li>
                    <li>
                        <Link>Đổi mật khẩu</Link>
                    </li>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon className="icon" icon={faRectangleList} style={{ color: '#0045b0' }} />
                        <span>Đơn mua</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon className="icon" icon={faBell} style={{ color: '#f14d2a' }} />
                        <span>Thông báo</span>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;
