import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import images from '../../../../assets/images';
import config from '../../../../config';
import { useEffect } from 'react';
function Navbar({ account }) {
    const param = useParams();
    useEffect(() => {}, [param]);
    const handleClick = (e) => {
        const tag = document.getElementsByClassName('link');
        console.log(tag);
    };
    return (
        <div className="d-flex flex-column">
            <div className="top d-flex align-items-center">
                <div className="img">
                    <img src={images.noAvatar} alt="" />
                </div>
                <div className="name d-flex flex-column">
                    <h6>{account && account.lastname + ' ' + account.firstname}</h6>
                    <Link>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Sửa hồ sơ</span>
                    </Link>
                </div>
            </div>
            <ul>
                <li>
                    <Link>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faUser}
                            style={{ color: '#0045b0' }}
                        />
                        <span>Tài khoản của tôi</span>
                    </Link>
                    <li>
                        <Link
                            onClick={(e) => handleClick(e)}
                            className="link active"
                            to={config.routes.web.user + '/profile'}
                        >
                            Hồ sơ
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.web.user + '/address'}
                        >
                            Địa chỉ
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            onClick={(e) => handleClick(e)}
                            to={config.routes.web.user + '/password'}
                        >
                            Đổi mật khẩu
                        </Link>
                    </li>
                </li>
                <li>
                    <Link
                        className="link active"
                        onClick={(e) => handleClick(e)}
                        to={config.routes.web.user + '/purchase?state=ALL'}
                    >
                        <FontAwesomeIcon
                            className="icon"
                            icon={faRectangleList}
                            style={{ color: '#0045b0' }}
                        />
                        <span>Đơn mua</span>
                    </Link>
                </li>
                <li>
                    <Link className="link" onClick={(e) => handleClick(e)}>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faBell}
                            style={{ color: '#f14d2a' }}
                        />
                        <span>Thông báo</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
