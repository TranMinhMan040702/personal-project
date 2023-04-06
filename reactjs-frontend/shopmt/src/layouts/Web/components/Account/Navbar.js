import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import images from '../../../../assets/images';
import config from '../../../../config';
import { useEffect } from 'react';
function Navbar({ account }) {
    let param = useParams()['slug'];
    const navigate = useNavigate();
    useEffect(() => {
        handleActive();
    }, [param]);
    const handleClick = (e) => {
        e.preventDefault();
        const paramOrigin = e.target.href.split('user/')[1];
        handleActive();
        navigate(config.routes.web.user + '/' + paramOrigin);
    };

    const handleActive = () => {
        let tag = document.getElementsByClassName('link');
        for (var i = 0; i < tag.length; i++) {
            if (tag[i].classList.contains('active')) {
                tag[i].classList.remove('active');
            }
            if (tag[i].href.includes(param)) {
                tag[i].classList.add('active');
            }
        }
    };

    const handAvatar = () => {
        return account.avatar ? account.avatar : images.noAvatar;
    };

    return (
        <div className="d-flex flex-column">
            <div className="top d-flex align-items-center">
                <div className="img">
                    <img src={handAvatar()} alt="" />
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
                    <Link onClick={(e) => handleClick(e)} to={config.routes.web.user + '/profile'}>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faUser}
                            style={{ color: '#0045b0' }}
                        />
                        Tài khoản của tôi
                    </Link>
                    <li>
                        <Link
                            onClick={(e) => handleClick(e)}
                            className="link"
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
                        className="link"
                        onClick={(e) => handleClick(e)}
                        to={config.routes.web.user + '/purchase?state=ALL'}
                    >
                        <FontAwesomeIcon
                            className="icon"
                            icon={faRectangleList}
                            style={{ color: '#0045b0' }}
                        />
                        Đơn mua
                    </Link>
                </li>
                <li>
                    <Link className="link" onClick={(e) => handleClick(e)}>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faBell}
                            style={{ color: '#f14d2a' }}
                        />
                        Thông báo
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
