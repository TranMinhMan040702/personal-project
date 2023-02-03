import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
function WebLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Contact />
            <Footer />
        </div>
    );
}

export default WebLayout;
