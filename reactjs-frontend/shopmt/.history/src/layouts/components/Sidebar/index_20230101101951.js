import { Link } from 'react-router-dom';
import './sidebar.scss';
import images from '../../../assets/images';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={images.logo} alt="logo" />
                </Link>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-primary" type="button">
                            Button
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
