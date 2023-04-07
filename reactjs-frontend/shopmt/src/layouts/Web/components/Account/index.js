import './account.scss';
import { accountUser } from '../../../../redux/selectors';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import { useLocation, useParams } from 'react-router-dom';
import routes from './routes';
function Account() {
    const account = useSelector(accountUser);
    let location = useLocation();
    let param = useParams();
    console.log(routes);
    let Component = routes.find((route) => route.path.includes(param['slug'])).component;
    return (
        <div className="account background">
            <div className="container d-flex justify-content-between">
                <div className="nav">
                    <Navbar account={account} />
                </div>
                <div className="main">
                    <Component account={account} />
                </div>
            </div>
        </div>
    );
}

export default Account;
