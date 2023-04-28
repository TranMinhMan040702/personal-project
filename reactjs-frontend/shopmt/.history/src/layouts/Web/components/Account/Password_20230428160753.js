import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { accountUser } from '../../../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import UserService from '../../../../services/UserService';
function Password() {
    const account = useSelector(accountUser);
    const navigate = useNavigate();
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
    const handleresetPassword = async () => {
        if (handleVerify()) {
            const { email, passwordCurrent, passwordNew } = resetPassword;
            try {
                const response = await UserService.resetPassword({
                    email,
                    passwordCurrent,
                    passwordNew,
                });
                if (response.data.status === 200) {
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
    console.log(resetPassword);
    return (
        <div className="wapper">
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
                    <button>Xác nhận</button>
                </form>
                <ToastContainer autoClose={1000} pauseOnHover={false} />
            </div>
        </div>
    );
}

export default Password;
