import './adminLayout.scss';
import Navbar from '../conponents/Navbar';
import Sidebar from '../conponents/Sidebar';

function AdminLayout({ children }) {
    return (
        <div className="home d-flex">
            <Sidebar />
            <div className="container p-0">
                <Navbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
