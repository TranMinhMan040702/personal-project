import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../../../services/AuthService';
import config from '../../../../config';

function Google() {
    const navigate = useNavigate();
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
            if (response.data.status === 404) {
                navigate(config.routes.web.register);
            }
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
