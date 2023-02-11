import Head from './Head';
import Search from './Search';
import Recommend from './Recommend';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <Head />
            <div className="pc-header">
                <Search />
            </div>
            <Recommend />
        </div>
    );
}

export default Header;
