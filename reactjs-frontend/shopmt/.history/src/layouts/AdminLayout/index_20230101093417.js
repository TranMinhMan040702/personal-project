import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

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
