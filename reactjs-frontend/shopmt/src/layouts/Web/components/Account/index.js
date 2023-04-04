import './account.scss';
import { accountUser } from '../../../../redux/selectors';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Profile from './Profile';
import Password from './Password';
import Purchase from './Purchase';
import Address from './Address';
import { useParams } from 'react-router-dom';
function Account() {
    const account = useSelector(accountUser);
    let param = useParams()['slug'];
    param = param[0].toUpperCase() + param.slice(1);
    const components = [Profile, Address, Password, Purchase];
    let Component = components.find((component) => component.name === param);
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
