import './account.scss';
import Navbar from './Navbar';
import Profile from './Profile';
function Account() {
    return (
        <div className="account background">
            <div className="container">
                <Navbar />
                <div className="main">
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default Account;
