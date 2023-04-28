import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../../assets/images';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SendEmailSuccess() {
    return (
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper" style={{ minHeight: '300px' }}>
                <header className="d-flex justify-content-between align-items-center">
                    <button className="btn" style={{ width: '10%' }}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: '20px', color: 'var(--primary-color-web)' }}
                        />
                    </button>
                    <h3 style={{ width: '80%' }}>Đặt lại mật khẩu</h3>
                </header>
                <div style={{ width: '100px', margin: '0 auto' }}>
                    <img
                        src={images.mail}
                        alt=""
                        style={{ height: '100px', width: '100px', marginRight: '5px' }}
                    />
                </div>
                <div className="text-center">
                    <p>Mã xác minh đã được gửi đến địa chỉ email</p>
                    <p style={{ color: 'var(--primary-color-web)' }}>ma*********@gmail.com.</p>
                    <p>Vui lòng xác minh.</p>
                </div>
                <form>
                    <button className="mt-3">OK</button>
                </form>
            </div>
        </div>
    );
}

export default SendEmailSuccess;
