import Head from './Head';
import Search from './Search';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <Head />
            <div className="pc-header">
                <Search />
            </div>
        </div>
    );
}

export default Header;
