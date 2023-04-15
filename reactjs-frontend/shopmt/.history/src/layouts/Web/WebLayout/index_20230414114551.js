import Header from '../components/Header';
import Footer from '../components/Footer';
import { RequestParamProvider } from '../../../context';
import './weblayout.scss';
function WebLayout({ children }) {
    return (
        <RequestParamProvider>
            <div>
                <Header />
                <div>{children}</div>
                <Footer />
            </div>
        </RequestParamProvider>
    );
}

export default WebLayout;
