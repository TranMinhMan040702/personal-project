import './header.scss';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="announcement">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-between align-items-center display-none">
                            <p>0964294799</p>
                            <p>mantm040702@gmail.com</p>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
                <div className="pc-header"></div>
            </div>
        </div>
    );
}

export default Header;
