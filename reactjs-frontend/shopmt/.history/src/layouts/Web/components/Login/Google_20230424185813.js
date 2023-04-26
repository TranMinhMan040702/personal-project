import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import AuthService from '../../../../services/AuthService';

function Google() {
    const responseGoogle = async (response) => {
        const userDecode = jwtDecode(response.credential);
        console.log(userDecode);
        // setUser({
        //     firstname: userDecode.given_name,
        //     lastname: userDecode.family_name,
        //     email: userDecode.email,
        //     password: userDecode.sub,
        // });
        try {
            const response = await AuthService.login({
                email: userDecode.email,
                password: userDecode.sub,
            });
        } catch (err) {
            console.log(err);
        }
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
