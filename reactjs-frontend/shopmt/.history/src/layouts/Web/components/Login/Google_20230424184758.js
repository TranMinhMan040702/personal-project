import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';

function Google() {
    const [user, setUser] = useState();

    const responseGoogle = (response) => {
        const userDecode = jwtDecode(response.credential);
        setUser({
            firstname: userDecode.given_name,
            lastname: userDecode.family_name,
            email: userDecode.email,
            password: userDecode.password,
            //"108438638856335634062"
        });
    };

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
