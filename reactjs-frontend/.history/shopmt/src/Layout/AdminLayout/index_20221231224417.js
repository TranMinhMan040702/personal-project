import Navbar from './Navbar';
import Sidebar from './Sidebar';

function AdminLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="content"></div>
            </div>
        </div>
    );
}

export default AdminLayout;
