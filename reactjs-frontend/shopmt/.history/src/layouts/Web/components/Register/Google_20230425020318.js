/* eslint-disable no-undef */
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import EmailService from '../../../../services/EmailService';

function RegisterGoogle({ register, setRegister, setLoading }) {
    const navigate = useNavigate();

    const responseGoogle = async (response) => {
        const userDecode = jwtDecode(response.credential);
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
    };

    return (
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
    );
}

export default RegisterGoogle;
