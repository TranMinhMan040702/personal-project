import Head from './Head';
import Search from './Search';
import Navbar from './Navbar';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <Head />
            <div className="pc-header">
                <Search />
            </div>
            {/* <Navbar /> */}
        </div>
    );
}

export default Header;
