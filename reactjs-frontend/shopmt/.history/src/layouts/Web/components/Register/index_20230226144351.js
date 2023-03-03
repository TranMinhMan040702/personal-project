import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
function RegisterForm() {
    return (
        <div className="login-register background">
            <div className="wapper">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>Đăng ký</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form>
                    <div className="d-flex flex-column mb-3">
                        <input type="text" placeholder="Nhập email . . ." name="email" />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input type="text" placeholder="Nhập mật khẩu . . ." name="password" />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input type="text" placeholder="Xác nhận mật khẩu . . ." name="repassword" />
                    </div>
                    <button>Đăng ký</button>
                </form>
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
                <footer className="text-center">
                    <h6>Bằng việc đăng kí, bạn đã đồng ý với ShopMT về</h6>
                    <Link>Điều khoản dịch vụ</Link>&<Link>Chính sách bảo mật</Link>
                </footer>
            </div>
        </div>
    );
}

export default RegisterForm;
