import { useState } from 'react';
import { Link } from 'react-router-dom';
function Password() {
    const [resetPassword, setResetPassword] = useState({
        email: '',
        passwordCurrent: '',
        passwordNew: '',
    });
    const [verifyPassword, setVerifyPassword] = useState({ verify: '' });
    const handleChange = (e) => {
        setResetPassword((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
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
                                type="text"
                                placeholder="Nhập mật khẩu hiện tại"
                                name="passCurrent"
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
                                type="text"
                                placeholder="Nhập mật khẩu mới"
                                name="passwordNew"
                                value={resetPassword.passwordNew}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Xác nhận mật khẩu </label>
                            <input
                                type="text"
                                placeholder="Nhập lại mật khẩu mới"
                                name="verify"
                                value={verifyPassword.verify}
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
