import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ResetPassword() {
    return (
        // <div className="login-register background" style={{ height: '100vh' }}>
        //     <div className="wapper">
        //         <header className="d-flex flex-column justify-content-between align-items-center">
        //             <h3>Đặt lại mật khẩu</h3>
        //             <p style={{ margin: '15px 0 0 0' }}>Gửi email đến</p>
        //             <p style={{ position: 'none', padding: '0', margin: '0', fontSize: '14px' }}>
        //                 cristran040702@gmail.com
        //             </p>
        //         </header>
        //         <form>
        //             <button
        //                 style={{
        //                     color: '#555555',
        //                     marginTop: '30px',
        //                     height: '50px',
        //                     backgroundColor: 'var(--white)',
        //                     border: '1px solid #e8e8e8',
        //                 }}
        //             >
        //                 <div className="d-flex justify-content-center align-items-center">
        //                     <FontAwesomeIcon
        //                         icon={faEnvelope}
        //                         style={{
        //                             color: '#555555',
        //                             fontSize: '20px',
        //                         }}
        //                     />
        //                     <p style={{ margin: '3px 0 0 10px' }}>
        //                         Email(cristran040702@gmail.com)
        //                     </p>
        //                 </div>
        //             </button>
        //         </form>
        //     </div>
        // </div>
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper" style={{ minHeight: '200px' }}>
                <header className="d-flex flex-column justify-content-between align-items-center">
                    <h3>Đặt lại mật khẩu</h3>
                </header>
                <div>
                    <svg viewBox="0 0 77 50" class="GoyExG">
                        <path
                            stroke="none"
                            d="M59.4 0H6.6C2.96 0 0 2.983 0 6.667v36.667C0 47.017 2.953 50 6.6 50h42.826c.7-.008 1.653-.354 1.653-1.497 0-1.156-.814-1.482-1.504-1.482h-.15v-.023H6.6c-1.823 0-3.568-1.822-3.568-3.664V6.667c0-1.842 1.745-3.623 3.568-3.623h52.8c1.824 0 3.6 1.78 3.6 3.623V18c0 .828.538 1.468 1.505 1.468S66 18.828 66 18v-.604-10.73C66 2.983 63.047 0 59.4 0zm-.64 5.76c.374.713.35 1.337-.324 1.733L33.84 21.53c-.423.248-1.575.923-3.124-.004L7.465 7.493c-.672-.396-.52-.896-.146-1.6s.753-1.094 1.426-.698L32.065 19.4 57.202 5.186c.672-.396 1.183-.14 1.556.574zm14.335 26.156l.277.078c.34.092.5.148.45.168 1.862.8 3.178 2.735 3.178 5v7.47c0 2.967-2.28 5.38-5.08 5.38H57.08c-2.8 0-5.08-2.413-5.08-5.38V37.15c0-2.538 1.67-4.665 3.905-5.23v-1.807C55.905 25.087 59.76 21 64.5 21c3.52 0 6.63 2.234 7.944 5.635l.02.05.006.016a9.55 9.55 0 0 1 .625 3.415v1.8zM70.48 28.17a1.28 1.28 0 0 1-.028-.081c-.83-2.754-3.223-4.604-5.954-4.604-3.447 0-6.25 2.974-6.25 6.63v1.655h12.505v-1.655c0-.677-.096-1.33-.275-1.946h.001zm4.18 16.45h-.002c0 1.596-1.227 2.892-2.737 2.892H57.08c-1.507 0-2.737-1.3-2.737-2.893v-7.47c0-1.597 1.227-2.893 2.738-2.893h14.84c1.508 0 2.737 1.3 2.737 2.893v7.47z"
                            fill-opacity=".87"
                            fill-rule="evenodd"
                        ></path>
                        <rect
                            stroke="none"
                            x="63"
                            y="38"
                            width="3"
                            height="6"
                            viewBox="0 0 3 6"
                            rx="1.5"
                            fill-opacity=".87"
                        ></rect>
                    </svg>
                </div>
                <form>
                    <button>OK</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
