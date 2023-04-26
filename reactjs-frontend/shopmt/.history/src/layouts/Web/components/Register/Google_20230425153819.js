/* eslint-disable no-undef */
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import EmailService from '../../../../services/EmailService';

function RegisterGoogle({ setRegister, setLoading }) {
    const navigate = useNavigate();

    const responseGoogle = async (response) => {
        const userDecode = jwtDecode(response.credential);
        const resp = await EmailService.checkEmailExist({ recipient: userDecode.email });
        if (!resp.data.Exist) {
            try {
                setLoading(true);
                await EmailService.sendEmail({ recipient: userDecode.email });
                setLoading(false);
                setRegister({
                    firstname: userDecode.given_name,
                    lastname: userDecode.family_name,
                    email: userDecode.email,
                    password: userDecode.sub,
                });
                navigate('/register/verify');
            } catch (err) {
                console.log(err);
            }
        } else {
            toast.error('Email đã được đăng ký');
        }
    };

    return (
        <>
            <ToastContainer autoClose={1000} pauseOnHover={false} />

            <GoogleLogin
                render={(renderProps) => (
                    <button
                        type="button"
                        className="btn btn-sm"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    ></button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
            />
        </>
    );
}

export default RegisterGoogle;
