import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { accountUser } from '../../../../redux/selectors';
import UserService from '../../../../services/UserService';
function Password() {
    const account = useSelector(accountUser);
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
        try {
            const response = await UserService.resetPassword();
        } catch (err) {
            console.log(err);
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
            </div>
        </div>
    );
}

export default Password;
