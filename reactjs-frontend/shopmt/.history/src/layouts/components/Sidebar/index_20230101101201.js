import './sidebar.scss';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">lamadmin</span>
                </Link>
            </div>
            <div className="center"></div>
        </div>
    );
}

export default Sidebar;
