import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function AdminLayout({ children }) {
    return (
        <div className="home">
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
