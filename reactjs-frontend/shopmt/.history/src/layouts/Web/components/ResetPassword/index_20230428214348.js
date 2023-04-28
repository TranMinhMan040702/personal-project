import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../../assets/images';
import { faArrowLeft, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

function ResetPassword() {
    return (
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper" style={{ minHeight: '300px' }}>
                <header className="d-flex flex-column justify-content-between align-items-center">
                    <h3>Đặt lại mật khẩu</h3>
                </header>
                <div className="text-center">
                    <p style={{ margin: '15px 0 0 0' }}>Gửi email đến</p>
                    <p style={{ position: 'none', padding: '0', margin: '0', fontSize: '14px' }}>
                        cristran040702@gmail.com
                    </p>
                </div>
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
                        <div className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{
                                    color: '#555555',
                                    fontSize: '20px',
                                }}
                            />
                            <p style={{ margin: '3px 0 0 10px' }}>
                                Email(cristran040702@gmail.com)
                            </p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
        // <div className="login-register background" style={{ height: '100vh' }}>
        //     <div className="wapper" style={{ minHeight: '300px' }}>
        //         <header className="d-flex justify-content-between align-items-center">
        //             <button className="btn" style={{ width: '10%' }}>
        //                 <FontAwesomeIcon
        //                     icon={faArrowLeft}
        //                     style={{ fontSize: '20px', color: 'var(--primary-color-web)' }}
        //                 />
        //             </button>
        //             <h3 style={{ width: '80%' }}>Đặt lại mật khẩu</h3>
        //         </header>
        //         <div style={{ width: '100px', margin: '0 auto' }}>
        //             <img
        //                 src={images.mail}
        //                 alt=""
        //                 style={{ height: '100px', width: '100px', marginRight: '5px' }}
        //             />
        //         </div>
        //         <div className="text-center">
        //             <p>Mã xác minh đã được gửi đến địa chỉ email</p>
        //             <p style={{ color: 'var(--primary-color-web)' }}>ma*********@gmail.com.</p>
        //             <p>Vui lòng xác minh.</p>
        //         </div>
        //         <form>
        //             <button className="mt-3">OK</button>
        //         </form>
        //     </div>
        // </div>
    );
}

export default ResetPassword;
