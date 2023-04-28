import { Link } from 'react-router-dom';
import images from '../../../../assets/images';

function HeaderForGotPassword() {
    return (
        <div className="nav">
            <div className="left">
                <div className="logo">
                    <img src={images.logoweb} alt="" />
                </div>
                <div className="title">Đặt lại mật khẩu</div>
            </div>
            <div className="right">
                <Link>Bạn cần giúp đỡ</Link>
            </div>
        </div>
    );
}

export default HeaderForGotPassword;
