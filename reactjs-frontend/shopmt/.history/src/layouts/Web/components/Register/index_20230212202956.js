import './register.scss';
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
                <form action="">
                    <div className="d-flex flex-column mb-3">
                        <label htmlFor="">Số điện thoại</label>
                        <input type="text" />
                    </div>
                </form>
                <footer></footer>
            </div>
        </div>
    );
}

export default RegisterForm;
