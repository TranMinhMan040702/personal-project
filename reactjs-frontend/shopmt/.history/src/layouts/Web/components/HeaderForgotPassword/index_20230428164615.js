import { Link } from 'react-router-dom';
import images from '../../../../assets/images';

function HeaderForGotPassword() {
    return (
        <div className="nav d-flex align-items-center justify-content-between">
            <div className="left d-flex align-items-center">
                <div className="logo">
                    <img
                        src={images.logoweb}
                        alt=""
                        style={{ height: '80px', width: '80px', objectFit: 'contain' }}
                    />
                </div>
                <div className="title" style={{ margin: '0' }}>
                    <h3>Đặt lại mật khẩu</h3>
                </div>
            </div>
            <div className="right">
                <Link>Bạn cần giúp đỡ</Link>
            </div>
        </div>
    );
}

export default HeaderForGotPassword;
