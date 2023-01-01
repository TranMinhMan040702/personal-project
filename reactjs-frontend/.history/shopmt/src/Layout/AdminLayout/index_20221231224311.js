import Navbar from './Navbar';
import Sidebar from './Sidebar';

function AdminLayout() {
    return (
        <div>
            <Sidebar />
            <div className="container">
                <Navbar />
            </div>
        </div>
    );
}

export default AdminLayout;
