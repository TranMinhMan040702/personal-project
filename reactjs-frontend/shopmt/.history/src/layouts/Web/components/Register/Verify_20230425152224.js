import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../../../redux/slice/accountSlice';
import { getCart } from '../../../../redux/slice/cartSlice';
import { getAddresses } from '../../../../redux/slice/addressSlice';
import { getDeliverise } from '../../../../redux/slice/deliverySlice';
import { ToastContainer, toast } from 'react-toastify';
import AuthService from '../../../../services/AuthService';
import config from '../../../../config';
import EmailService from '../../../../services/EmailService';

function Verify({ register, setRegister }) {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [code, setCode] = useState();

    const hanldeLength = (e) => {
        if (e.target.value > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
    };
    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setRegister({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repassword: '',
        });
        navigate(-1);
    };

    const handleChecked = async (e) => {
        e.preventDefault();
        try {
            const response = await EmailService.checkOtp(code);
            if (response.data.Checked) {
                try {
                    const { firstname, lastname, email, password } = register;
                    const response = await AuthService.register({
                        firstname,
                        lastname,
                        email,
                        password,
                    });
                    if (response.data.status === 404) {
                        navigate(config.routes.web.register);
                    } else {
                        const accessToken = response?.data?.accessToken;
                        const refreshToken = response?.data?.refreshToken;
                        const roles = response?.data?.roles;
                        const userId = response?.data?.userId;
                        localStorage.setItem('token', accessToken);
                        localStorage.setItem('refreshToken', refreshToken);
                        localStorage.setItem('userId', userId);
                        setAuth({
                            email,
                            password,
                            accessToken,
                            roles,
                            userId,
                        });
                        dispatch(createAccount(userId));
                        dispatch(getCart(userId));
                        dispatch(getAddresses(userId));
                        dispatch(getDeliverise());
                        navigate('/');
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                toast.error('Mã không chính xác');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="wapper">
            <header className="d-flex justify-content-between align-items-center">
                <h4>Nhập mã xác nhận</h4>
                <div className="img">
                    <img src={images.logoweb} alt="" />
                </div>
            </header>
            <form>
                <div className="d-flex flex-column mb-3">
                    <input
                        style={{ fontSize: '25px' }}
                        type="number"
                        placeholder="Nhập mã Code . . ."
                        name="code-verify"
                        maxLength="6"
                        onInput={(e) => hanldeLength(e)}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn"
                        onClick={(e) => handleChecked(e)}
                        style={{ width: '160px' }}
                    >
                        Xác nhận
                    </button>
                    <button
                        className="btn"
                        onClick={(e) => handleCancel(e)}
                        style={{ width: '160px', backgroundColor: '#0f3460' }}
                    >
                        Hủy
                    </button>
                </div>
            </form>
            <footer className="text-center">
                <h6>Bằng việc đăng kí, bạn đã đồng ý với ShopMT về</h6>
                <Link>Điều khoản dịch vụ</Link>&<Link>Chính sách bảo mật</Link>
            </footer>
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default Verify;
