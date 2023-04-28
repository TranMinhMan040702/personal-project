import Footer from '../components/Footer';
import Header from '../components/Header';

function ForgotPasswordLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default ForgotPasswordLayout;
