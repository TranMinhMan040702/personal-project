import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import AuthService from '../../../../services/AuthService';
import images from '../../../../assets/images';
import config from '../../../../config';
import { createAccount } from '../../../../redux/slice/accountSlice';
import { getCart } from '../../../../redux/slice/cartSlice';

function LoginForm() {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login(user);
            const accessToken = response?.data?.accessToken;
            const refreshToken = response?.data?.refreshToken;
            const roles = response?.data?.roles;
            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            setAuth({ ...user, accessToken, roles });
            setUser({ email: '', password: '' });
            // thunk function
            dispatch(createAccount(response.data.userId));
            dispatch(getCart(response.data.userId));
            navigate(roles.includes('ADMIN') ? '/admin' : from, { replace: true });
        } catch (err) {
            toast.error(config.message.loginError);
            console.log(err);
        }
    };

    return (
        <div className="login-register background">
            <div className="wapper">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>Đăng nhập</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="d-flex flex-column mb-3">
                        <input
                            type="text"
                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                            name="email"
                            value={user.email}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            name="password"
                            value={user.password}
                            onChange={(e) => handleChange(e)}
                        />
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
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default LoginForm;
