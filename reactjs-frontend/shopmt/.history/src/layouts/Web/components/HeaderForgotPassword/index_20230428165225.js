import { Link } from 'react-router-dom';
import images from '../../../../assets/images';

function HeaderForGotPassword() {
    return (
        <div
            className="nav d-flex align-items-center justify-content-between px-5 py-1"
            style={{
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}
        >
            <div className="left d-flex align-items-center">
                <div className="logo">
                    <img
                        src={images.logoweb}
                        alt=""
                        style={{ height: '60px', width: '60px', objectFit: 'contain' }}
                    />
                </div>
                <div className="title">
                    <h4 style={{ margin: '0' }}>Đặt lại mật khẩu</h4>
                </div>
            </div>
            <div className="right">
                <Link>Bạn cần giúp đỡ</Link>
            </div>
        </div>
    );
}

export default HeaderForGotPassword;
