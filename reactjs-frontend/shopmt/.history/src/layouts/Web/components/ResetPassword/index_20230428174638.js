function ResetPassword() {
    return (
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper" style={{ height: '200px' }}>
                <header className="d-flex flex-column justify-content-between align-items-center">
                    <h3>Đặt lại mật khẩu</h3>
                    <p style={{ margin: '15px 0 0 0' }}>Gửi email đến</p>
                    <p style={{ position: 'none', padding: '0', margin: '0', fontSize: '14px' }}>
                        cristran040702@gmail.com
                    </p>
                </header>
                <form>
                    <button>Tiếp tục</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
