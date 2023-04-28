function SetNewPassword() {
    return (
        <div className="login-register background">
            <div className="wapper">
                <header className="d-flex justify-content-between align-items-center">
                    <h3>Thiết lập mật khẩu</h3>
                </header>

                <form>
                    <div className="d-flex flex-column mb-3">
                        <input
                            type="text"
                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                            name="email"
                        />
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <input type="password" placeholder="Mật khẩu" name="password" />
                    </div>
                    <button>Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}

export default SetNewPassword;
