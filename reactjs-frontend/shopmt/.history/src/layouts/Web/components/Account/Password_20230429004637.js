import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { accountUser } from '../../../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import accountSlice from '../../../../redux/slice/accountSlice';
import cartSlice from '../../../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import UserService from '../../../../services/UserService';
import AuthService from '../../../../services/AuthService';
import { useAuth } from '../../../../hooks';
import config from '../../../../config';
function Password() {
    const account = useSelector(accountUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setAuth } = useAuth();
    const [resetPassword, setResetPassword] = useState({
        email: account.email,
        passwordCurrent: '',
        passwordNew: '',
        verify: '',
    });
    const handleChange = (e) => {
        setResetPassword((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleVerify = () => {
        return resetPassword.passwordNew === resetPassword.verify ? true : false;
    };
    const handleLogout = () => {
        logout({
            tokenRefresh: localStorage.getItem('refreshToken'),
            userId: localStorage.getItem('userId'),
        });
        dispatch(accountSlice.actions.clearedAccount({}));
        dispatch(cartSlice.actions.clearedCart({}));
        setAuth({});
        navigate('/login', { replace: true });
    };
    const logout = async (tokenRequest) => {
        try {
            await AuthService.logout(tokenRequest);
            localStorage.clear();
        } catch (err) {
            console.error(err);
        }
    };
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (handleVerify()) {
            const { email, passwordCurrent, passwordNew } = resetPassword;
            try {
                const response = await UserService.resetPassword({
                    email,
                    passwordCurrent,
                    passwordNew,
                });
                if (response.data.status === 200) {
                    handleLogout();
                } else {
                    toast.error('Cập nhật mật khẩu thất bại');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.error('Xác nhận lại mật khẩu');
            setResetPassword((prev) => {
                return { ...prev, verify: '' };
            });
        }
    };

    return (
        <div className="wapper">
            <ToastContainer autoClose={1000} pauseOnHover={false} />
            <div className="header">
                <h5>Đổi mật khẩu</h5>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
            </div>
            <div className="account">
                <form action="">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="">Mật khẩu hiện tại</label>
                            <input
                                type="password"
                                placeholder="Mật khẩu hiện tại"
                                name="passwordCurrent"
                                value={resetPassword.passwordCurrent}
                                onChange={(e) => handleChange(e)}
                            />
                            <Link
                                to={config.routes.web.reset}
                                style={{ fontSize: '14px', marginLeft: '10px', color: '#333232' }}
                            >
                                Quên mật khẩu ?
                            </Link>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Mật khẩu mới</label>
                            <input
                                type="password"
                                placeholder="Mật khẩu mới"
                                name="passwordNew"
                                value={resetPassword.passwordNew}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Xác nhận mật khẩu </label>
                            <input
                                type="password"
                                placeholder="Xác nhận mật khẩu"
                                name="verify"
                                value={resetPassword.verify}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <button onClick={(e) => handleResetPassword(e)}>Xác nhận</button>
                </form>
            </div>
        </div>
    );
}

export default Password;
