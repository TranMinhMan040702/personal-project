import './adminLayout.scss';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function AdminLayout({ children }) {
    return (
        <div className="d-flex">
            <Sidebar />
            <div
                className="container p-0"
                style={{ backgroundColor: 'var(--background-color-content-admin)' }}
            >
                <Navbar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
