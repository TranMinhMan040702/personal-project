import Navbar from '../components/Navbar';
import Sidebar from './Sidebar';

function AdminLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
