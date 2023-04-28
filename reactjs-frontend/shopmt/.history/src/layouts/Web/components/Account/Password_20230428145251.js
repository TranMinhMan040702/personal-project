import { Link } from 'react-router-dom';
function Password() {
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
                            <input type="text" placeholder="Nhập mật khẩu hiện tại" />
                            <Link
                                style={{ fontSize: '14px', marginLeft: '10px', color: '#333232' }}
                            >
                                Quên mật khẩu ?
                            </Link>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Mật khẩu mới</label>
                            <input type="text" placeholder="Nhập mật khẩu mới" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Xác nhận mật khẩu </label>
                            <input type="text" placeholder="Nhập lại mật khẩu mới" />
                        </div>
                    </div>
                    <button>Xác nhận</button>
                </form>
            </div>
        </div>
    );
}

export default Password;
