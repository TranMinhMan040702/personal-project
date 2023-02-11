import './account.scss';
import Navbar from './Navbar';
import Profile from './Profile';
import Password from './Password';
import { useParams } from 'react-router-dom';
function Account() {
    const param = useParams();
    // const children = param.index(0).toUpperCase() + param.slice(1);
    console.log(typeof param.slug[0]);
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
