import './login.scss';
import images from '../../../../assets/images';
function LoginForm() {
    return (
        <div className="login background">
            <div className="wapper">
                <header className="d-flex justify-content-between">
                    <h3>Đăng nhập</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form action="">
                    <div className="d-flex flex-column mb-3">
                        <label htmlFor="">Số điện thoại</label>
                        <input type="number" />
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="">Mật khẩu</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
