import './account.scss';
import Navbar from './Navbar';
import Profile from './Profile';
function Account() {
    return (
        <div className="account background">
            <div className="container d-flex justify-content-between">
                <div className="nav">
                    <Navbar />
                </div>
                <div className="main">
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default Account;
