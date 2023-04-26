import { GoogleLogin } from '@react-oauth/google';

const responseGoogle = (response) => {
    console.log(response);
};
function Google() {
    const clientId = '230544333256-l7fjj3crc88hc3d7vih03djt43e94apu.apps.googleusercontent.com';
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
