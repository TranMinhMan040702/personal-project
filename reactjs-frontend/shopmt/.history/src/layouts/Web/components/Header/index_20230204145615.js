import Head from './Head';
import Search from './Search';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <Head />
                <div className="pc-header">
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Header;
