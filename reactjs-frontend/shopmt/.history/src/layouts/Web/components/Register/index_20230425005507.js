import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthService from '../../../../services/AuthService';
import { useAuth } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../../../redux/slice/accountSlice';
import { getCart } from '../../../../redux/slice/cartSlice';
import { getAddresses } from '../../../../redux/slice/addressSlice';
import { getDeliverise } from '../../../../redux/slice/deliverySlice';
import Verify from './Verify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RegisterGoogle from './Google';
import Loading from '../../../../components/Loading';
import images from '../../../../assets/images';

function RegisterForm() {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const dispatch = useDispatch();
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const param = useParams();

    const [loading, setLoading] = useState(false);

    const [register, setRegister] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repassword: '',
    });
    const handleCheckPassword = () => {
        return register.password === register.repassword ? true : false;
    };
    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleCheckPassword()) {
            console.log(register);
            try {
                const { firstname, lastname, email, password } = register;
                const response = await AuthService.register({
                    firstname,
                    lastname,
                    email,
                    password,
                });
                const accessToken = response?.data?.accessToken;
                const refreshToken = response?.data?.refreshToken;
                const roles = response?.data?.roles;
                const userId = response?.data?.userId;
                localStorage.setItem('token', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('userId', userId);
                setAuth({ email, password, accessToken, roles, userId });
                dispatch(createAccount(userId));
                dispatch(getCart(userId));
                dispatch(getAddresses(userId));
                dispatch(getDeliverise());
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('Mật khẩu xác nhận không chính xác');
        }
    };
    return (
        <div className="login-register background">
            {param.slug !== 'verify' ? (
                <>
                    {loading ? (
                        <Loading />
                    ) : (
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
                                        value={register.repassword}
                                    />
                                </div>
                                <button>Đăng ký</button>
                            </form>
                            <span>HOẶC</span>
                            <div className="face-google d-flex justify-content-center align-items-center">
                                <GoogleOAuthProvider clientId={clientId}>
                                    <RegisterGoogle
                                        register={register}
                                        setRegister={setRegister}
                                        setLoading={setLoading}
                                    />
                                </GoogleOAuthProvider>
                            </div>
                            <footer className="text-center">
                                <h6>Bằng việc đăng kí, bạn đã đồng ý với ShopMT về</h6>
                                <Link>Điều khoản dịch vụ</Link>&<Link>Chính sách bảo mật</Link>
                            </footer>
                        </div>
                    )}
                </>
            ) : (
                <Verify />
            )}
        </div>
    );
}

export default RegisterForm;
