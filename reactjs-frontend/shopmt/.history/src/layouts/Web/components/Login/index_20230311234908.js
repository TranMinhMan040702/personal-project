import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import AuthService from '../../../../services/AuthService';
import images from '../../../../assets/images';
import config from '../../../../config';
import UserService from '../../../../services/UserService';
import { createAccount } from '../../../../redux/slice/accountSlice';
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
            getUserById(response.data.userId);
            dispatch(createAccount());
            navigate(roles.includes('ADMIN') ? '/admin' : from, { replace: true });
        } catch (err) {
            toast.error(config.message.loginError);
            console.log(err);
        }
    };

    const getUserById = async (id) => {
        try {
            const response = await UserService.getUserById(id);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login-register background">
            <div className="wapper">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>????ng nh???p</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="d-flex flex-column mb-3">
                        <input
                            type="text"
                            placeholder="Email/S??? ??i???n tho???i/T??n ????ng nh???p"
                            name="email"
                            value={user.email}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input
                            type="password"
                            placeholder="M???t kh???u"
                            name="password"
                            value={user.password}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <button>????ng nh???p</button>
                </form>
                <div className="forget-pass d-flex justify-content-end">
                    <Link>Qu??n m???t kh???u</Link>
                </div>
                <span>HO???C</span>
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
                    <p>B???n m???i ?????n v???i ShopMT?</p>
                    <Link to={config.routes.web.register}>????ng k??</Link>
                </footer>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default LoginForm;
