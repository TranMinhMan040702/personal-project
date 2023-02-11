import './login.scss';
function LoginForm() {
    return (
        <div className="login background">
            <div className="wapper">
                <header>
                    <h3>Đăng nhập</h3>
                </header>
                <form action="">
                    <div className="d-flex flex-column">
                        <label htmlFor="">Số điện thoại</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label htmlFor="">Mật khẩu</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
