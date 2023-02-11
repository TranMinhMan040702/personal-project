import { Link } from 'react-router-dom';
function Password() {
    return (
        <>
            <div className="header">
                <h5>Đổi mật khẩu</h5>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
            </div>
            <div className="password">
                <form action="">
                    <div>
                        <label htmlFor="">Mật khẩu hiện tại</label>
                        <input type="text" />
                        <Link>Quên mật khẩu</Link>
                    </div>
                    <div>
                        <label htmlFor="">Mật khẩu hiện tại</label>
                        <input type="text" />
                        <Link>Quên mật khẩu</Link>
                    </div>
                    <div>
                        <label htmlFor="">Mật khẩu hiện tại</label>
                        <input type="text" />
                        <Link>Quên mật khẩu</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Password;
