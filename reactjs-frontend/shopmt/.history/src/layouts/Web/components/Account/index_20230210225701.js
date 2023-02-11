import './account.scss';
import Navbar from './Navbar';
import Profile from './Profile';
import Password from './Password';
import { useParams } from 'react-router-dom';
function Account() {
    const param = useParams()['slug'];
    const Children = param[0].toUpperCase();
    console.log(param);
    return (
        <div className="account background">
            <div className="container d-flex justify-content-between">
                <div className="nav">
                    <Navbar />
                </div>
                <div className="main">{}</div>
            </div>
        </div>
    );
}

export default Account;
