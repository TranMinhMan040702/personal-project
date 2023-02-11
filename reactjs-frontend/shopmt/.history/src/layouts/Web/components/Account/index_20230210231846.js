import './account.scss';
import Navbar from './Navbar';
import Profile from './Profile';
import Password from './Password';
import { useParams } from 'react-router-dom';
function Account() {
    let param = useParams()['slug'];
    param = param[0].toUpperCase() + param.slice(1);
    const components = [Profile, Password];
    let Component = components.find((component) => component.name === param);
    return (
        <div className="account background">
            <div className="container d-flex justify-content-between">
                <div className="nav">
                    <Navbar />
                </div>
                <div className="main">
                    <Component />
                </div>
            </div>
        </div>
    );
}

export default Account;
