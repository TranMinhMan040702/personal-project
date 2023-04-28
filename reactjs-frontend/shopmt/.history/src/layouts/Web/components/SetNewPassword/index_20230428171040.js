function SetNewPassword() {
    return (
        <div className="login-register background">
            <div className="wapper">
                <header className="d-flex flex-column justify-content-between align-items-center">
                    <h3>Thiết lập mật khẩu</h3>
                    <p style={{ margin: '10px, 0, 0, 0' }}>Tạo mật khẩu mới cho</p>
                    <p style={{ position: 'none', padding: '0', margin: '0', fontSize: '14px' }}>
                        cristran040702@gmail.com
                    </p>
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
