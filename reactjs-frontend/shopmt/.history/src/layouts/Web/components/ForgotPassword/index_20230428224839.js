import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { accountUser } from '../../../../redux/selectors';
import hiddenEmail from '../../../../utils/hiddenEmail';

function ResetPassword() {
    const navigate = useNavigate();
    const email = hiddenEmail(useSelector(accountUser).email);
    const handleBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };
    return (
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper" style={{ minHeight: '200px', paddingBottom: '60px' }}>
                <header className="d-flex justify-content-between align-items-center">
                    <button className="btn" style={{ width: '10%' }} onClick={(e) => handleBack(e)}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: '20px', color: 'var(--primary-color-web)' }}
                        />
                    </button>
                    <h3 style={{ width: '80%' }}>Đặt lại mật khẩu</h3>
                </header>
                <div className="text-center">
                    <p style={{ margin: '15px 0 0 0', fontSize: '16px' }}>Gửi email đến</p>
                    <p
                        style={{
                            position: 'none',
                            padding: '0',
                            margin: '0',
                            fontSize: '16px',
                            color: 'var(--primary-color-web)',
                        }}
                    >
                        {email}
                    </p>
                </div>
                <form>
                    <button
                        style={{
                            color: '#555555',
                            marginTop: '20px',
                            height: '50px',
                            backgroundColor: 'var(--white)',
                            border: '1px solid #e8e8e8',
                        }}
                    >
                        <div className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{
                                    color: '#555555',
                                    fontSize: '20px',
                                }}
                            />
                            <p style={{ margin: '3px 0 0 10px' }}>Email({email})</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
