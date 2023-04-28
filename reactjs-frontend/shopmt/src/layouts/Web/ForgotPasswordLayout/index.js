import Footer from '../components/Footer';
import HeaderForGotPassword from '../components/HeaderForgotPassword';

function ForgotPasswordLayout({ children }) {
    return (
        <div>
            <HeaderForGotPassword />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default ForgotPasswordLayout;
