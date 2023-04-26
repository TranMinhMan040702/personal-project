import GoogleLogin from 'react-google-login';

const clientId = '230544333256-l7fjj3crc88hc3d7vih03djt43e94apu.apps.googleusercontent.com';
const responseGoogle = (response) => {
    console.log(response);
};
function LoginGoogle() {
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default LoginGoogle;
