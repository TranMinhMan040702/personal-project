import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <button
                        style={{
                            color: '#555555',
                            marginTop: '30px',
                            height: '50px',
                            backgroundColor: 'var(--white)',
                            border: '1px solid #e8e8e8',
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: '#555555', margin: '0 10px 0 0', fontSize: '16px' }}
                        />
                        Email(cristran040702@gmail.com)
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
