import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function SetNewPassword() {
    const [seePassword, setSeePassword] = useState(false);
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
            <div className="wapper" style={{ minHeight: '200px', paddingBottom: '50px' }}>
                <header className="d-flex flex-column justify-content-between align-items-center">
                    <h3>Thiết lập mật khẩu</h3>
                    <p style={{ margin: '15px 0 0 0' }}>Tạo mật khẩu mới cho</p>
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
