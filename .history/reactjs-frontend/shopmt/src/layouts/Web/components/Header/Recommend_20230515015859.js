import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <header className="header d-flex">
            <div className="container d-flex align-items-center  justify-content-center">
                <div className="recommend">
                    <ul className="d-flex align-items-center">
                        <li>
                            <Link to="/">Đồ ăn tuổi thơ</Link>
                        </li>
                        <li>
                            <Link to="/">Bánh que cay</Link>
                        </li>
                        <li>
                            <Link to="/">Bánh tráng</Link>
                        </li>
                        <li>
                            <Link to="/">Khô bò - heo</Link>
                        </li>
                        <li>
                            <Link to="/">Sách ngoại ngữ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
