import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsd } from '@fortawesome/free-solid-svg-icons';
function Home() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Dash board</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card card-body mb-4 shadow-sm">
                            <article className="d-flex align-items-center" style={{ padding: '5px' }}>
                                <span className="icon rounded-circle">
                                    <FontAwesomeIcon className="sidebar-icon" icon={faUsd} />
                                </span>
                                <div className="text">
                                    <h6 className="mb-1">Total Sales</h6>
                                    <span>22,67</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
