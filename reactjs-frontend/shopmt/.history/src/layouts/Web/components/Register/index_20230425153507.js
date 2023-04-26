import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Verify from './Verify';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RegisterGoogle from './Google';
import Loading from '../../../../components/Loading';
import images from '../../../../assets/images';
import EmailService from '../../../../services/EmailService';

function RegisterForm() {
    const clientId = process.env.REACT_APP_CLIENT_ID;
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
        const response = await EmailService.checkEmailExist({ recipient: register.email });
        if (!response.data.Exist) {
            if (handleCheckPassword()) {
                try {
                    setLoading(true);
                    await EmailService.sendEmail({ recipient: register.email });
                    setLoading(false);
                    navigate('/register/verify');
                } catch (err) {
                    console.log(err);
                }
            } else {
                toast.error('Mật khẩu không khớp');
                console.log('Mật khẩu xác nhận không chính xác');
            }
        } else {
            toast.error('Email đã được đăng ký');
        }
    };
    return (
        <div className="login-register background">
            {param.slug !== 'verify' ? (
                <>
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
                        {loading ? (
                            <Loading />
                        ) : (
                            <>
                                <span>HOẶC</span>
                                <div className="face-google d-flex justify-content-center align-items-center">
                                    <GoogleOAuthProvider clientId={clientId}>
                                        <RegisterGoogle
                                            setRegister={setRegister}
                                            setLoading={setLoading}
                                        />
                                    </GoogleOAuthProvider>
                                </div>
                            </>
                        )}

                        <footer className="text-center">
                            <h6>Bằng việc đăng kí, bạn đã đồng ý với ShopMT về</h6>
                            <Link>Điều khoản dịch vụ</Link>&<Link>Chính sách bảo mật</Link>
                        </footer>
                    </div>
                </>
            ) : (
                <Verify register={register} setRegister={setRegister} />
            )}
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </div>
    );
}

export default RegisterForm;
