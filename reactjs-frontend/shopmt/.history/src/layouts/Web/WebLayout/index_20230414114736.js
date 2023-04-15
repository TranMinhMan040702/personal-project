import Header from '../components/Header';
import Footer from '../components/Footer';
import { RequestParamProvider } from '../../../context';
import { Provider } from 'react-redux';
import './weblayout.scss';
import store from '../../../redux/store';
function WebLayout({ children }) {
    return (
        <Provider store={store}>
            <RequestParamProvider>
                <div>
                    <Header />
                    <div>{children}</div>
                    <Footer />
                </div>
            </RequestParamProvider>
        </Provider>
    );
}

export default WebLayout;
