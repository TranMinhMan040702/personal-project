import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const responseGoogle = (response) => {
    console.log(response);
};
function Google() {
    return (
        <GoogleLogin
            render={(renderProps) => (
                <button
                    type="button"
                    className=""
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    Sign in with google
                </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
        />
    );
}

export default Google;
