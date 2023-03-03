import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
function RegisterForm() {
    const [register, setRegister] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const [repassword, setRepassword] = useState({ repassword: '' });
    const [check, setCheck] = useState(false);

    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
        setRepassword({ [e.target.name]: e.target.value });
    };
    const handleCheckPassword = () => {
        setCheck(register.password === repassword.repassword ? true : false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheckPassword();
        console.log();
        if (check) {
            console.log(register);
        } else {
            console.log('Mật khẩu xác nhận không chính xác');
        }
    };
    return (
        <div className="login-register background">
            <div className="wapper">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>Đăng ký</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="d-flex flex-column mb-3">
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="Họ . . ."
                            name="firstname"
                            value={register.firstname}
                        />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="Tên . . ."
                            name="lastname"
                            value={register.lastname}
                        />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="Email . . ."
                            name="email"
                            value={register.email}
                        />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input
                            onChange={(e) => handleChange(e)}
                            type="password"
                            placeholder="Mật khẩu . . ."
                            name="password"
                            value={register.password}
                        />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input
                            onChange={(e) => handleChange(e)}
                            type="password"
                            placeholder="Xác nhận mật khẩu . . ."
                            name="repassword"
                            value={repassword.repassword}
                        />
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
