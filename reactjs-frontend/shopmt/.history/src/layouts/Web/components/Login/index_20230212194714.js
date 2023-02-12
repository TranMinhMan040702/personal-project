import './login.scss';
import images from '../../../../assets/images';
import { Link } from 'react-router-dom';
function LoginForm() {
    return (
        <div className="login background">
            <div className="wapper">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>Đăng nhập</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form action="">
                    <div className="d-flex flex-column mb-3">
                        <label htmlFor="">Số điện thoại</label>
                        <input type="text" />
                    </div>
                    <div className="d-flex flex-column mb-5">
                        <label htmlFor="">Mật khẩu</label>
                        <input type="text" />
                    </div>
                    <button>Đăng nhập</button>
                </form>
                <div className="forget-pass d-flex justify-content-end">
                    <Link>Quên mật khẩu</Link>
                </div>
                <span>HOẶC</span>
                <div className="face-google">
                    <Link className="face">
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        Facebook
                    </Link>
                    <Link className="google">
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        Google
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
