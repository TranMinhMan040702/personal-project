import { Link } from 'react-router-dom';
function Password() {
    return (
        <>
            <div className="header">
                <h5>Đổi mật khẩu</h5>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
            </div>
            <div className="account">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="">Mật khẩu hiện tại</label>
                        <input type="text" />
                        <Link style={{ fontSize: '14px', marginLeft: '5px', color: '#333232' }}>Quên mật khẩu ?</Link>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Mật khẩu mới</label>
                        <input type="text" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Xác nhận mật khẩu </label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Password;
