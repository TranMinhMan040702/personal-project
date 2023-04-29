import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import getUrlVars from '../../../../utils/getUrlVars';

function SetNewPassword() {
    const [seePassword, setSeePassword] = useState(false);
    const location = useLocation().search;
    const params = getUrlVars(location);
    const [resetPassword, setResetPassword] = useState({
        email: params.email,
        code: params.code,
        passwordNew: '',
    });
    const handleChange = (e) => {
        setResetPassword((prev) => {
            return { ...prev, passwordNew: e.target.value };
        });
    };
    const handleSeePassword = (e) => {
        e.preventDefault();
        const input = document.getElementById('setNewPassword');
        setSeePassword((prev) => {
            if (!prev) {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
            return !prev;
        });
    };
    return (
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper" style={{ minHeight: '200px', paddingBottom: '60px' }}>
                <header className="d-flex justify-content-between align-items-center">
                    <button className="btn" style={{ width: '10%' }}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: '20px', color: 'var(--primary-color-web)' }}
                        />
                    </button>
                    <h3 style={{ width: '80%' }}>Thiết lập mật khẩu</h3>
                </header>
                <div className="text-center">
                    <p style={{ margin: '15px 0 0 0' }}>Tạo mật khẩu mới cho</p>
                    <p
                        style={{
                            position: 'none',
                            padding: '0',
                            margin: '0',
                            fontSize: '14px',
                            color: 'var(--primary-color-web)',
                        }}
                    >
                        cristran040702@gmail.com
                    </p>
                </div>
                <form>
                    <div className="d-flex justify-content-between align-items-center">
                        <input
                            id="setNewPassword"
                            type="password"
                            placeholder="Mật khẩu"
                            name="passwordNew"
                            value={resetPassword.passwordNew}
                            onChange={(e) => handleChange(e)}
                            style={{ width: '100%' }}
                        />
                        <button
                            style={{
                                backgroundColor: 'var(--white)',
                                width: '20px',
                                marginLeft: '10px',
                            }}
                            onClick={(e) => handleSeePassword(e)}
                        >
                            {seePassword ? (
                                <FontAwesomeIcon
                                    id="icon-eye"
                                    icon={faEye}
                                    style={{
                                        color: 'var(--primary-color-web)',
                                        fontSize: '20px',
                                        marginTop: '3px',
                                    }}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    id="icon-eye"
                                    icon={faEyeSlash}
                                    style={{
                                        color: 'var(--primary-color-web)',
                                        fontSize: '20px',
                                        marginTop: '3px',
                                    }}
                                />
                            )}
                        </button>
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

export default SetNewPassword;
