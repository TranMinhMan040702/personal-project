function ResetPassword() {
    return (
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper">
                <header className="d-flex flex-column justify-content-between align-items-center">
                    <h3>Đặt lại mật khẩu</h3>
                    <p style={{ margin: '15px 0 0 0' }}>Gửi email đến</p>
                    <p style={{ position: 'none', padding: '0', margin: '0', fontSize: '14px' }}>
                        cristran040702@gmail.com
                    </p>
                </header>
                <form>
                    <div className="d-flex justify-content-between align-items-center">
                        <input
                            id="setNewPassword"
                            type="password"
                            placeholder="Mật khẩu"
                            name="password"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <p
                        className="text-center"
                        style={{ color: '#c5c9ca', fontSize: '14px', padding: '10px 0 0 0' }}
                    >
                        Đừng tiếc lộ mật khẩu nhé !
                    </p>
                    <button>Tiếp tục</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
