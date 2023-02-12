import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import config from '../../../../config';
function LoginForm() {
    return (
        <div className="login-register background">
            <div className="wapper">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>Đăng nhập</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form action="">
                    <div className="d-flex flex-column mb-3">
                        <input type="text" placeholder="Email/Số điện thoại/Tên đăng nhập" />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input type="text" placeholder="Mật khẩu" />
                    </div>
                    <button>Đăng nhập</button>
                </form>
                <div className="forget-pass d-flex justify-content-end">
                    <Link>Quên mật khẩu</Link>
                </div>
                <span>HOẶC</span>
                <div className="face-google d-flex justify-content-between align-items-center">
                    <Link className="face">
                        <div className="img">
                            <img src={images.facebook} alt="" />
                        </div>
                        Facebook
                    </Link>
                    <Link className="google">
                        <div className="img">
                            <img src={images.google} alt="" />
                        </div>
                        Google
                    </Link>
                </div>
                <footer className="d-flex align-items-center justify-content-center">
                    <p>Bạn mới đến với ShopMT?</p>
                    <Link to={config.routes.web.register}>Đăng ký</Link>
                </footer>
            </div>
        </div>
    );
}

export default LoginForm;
