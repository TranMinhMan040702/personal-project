import './register.scss';
import images from '../../../../assets/images';
function RegisterForm() {
    return (
        <div className="register background">
            <div className="wapper">
                <header>
                    <h3>Đăng ký</h3>
                    <div className="img">
                        <img src={images.logoweb} alt="" />
                    </div>
                </header>
                <form action=""></form>
                <footer></footer>
            </div>
        </div>
    );
}

export default RegisterForm;
