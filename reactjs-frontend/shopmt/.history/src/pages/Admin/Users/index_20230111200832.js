import { Link } from 'react-router-dom';
import images from '../../../assets/images';
import './users.scss';
function Users() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Customers</h2>
            </div>
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input className="form-control" type="text" placeholder="Search...." />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select" name="show" id="">
                                <option value="20">Show 20</option>
                                <option value="30">Show 30</option>
                                <option value="40">Show 40</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        <div className="col">
                            <div className="card card-user shadow-sm">
                                <div className="card-header card-header-user">
                                    <img src={images.noAvatar} alt="avatar user" className="img-avatar" />
                                </div>
                                <div className="card-body text-center">
                                    <div className="card-title mt-5">
                                        <h5>Admin</h5>
                                    </div>
                                    <div className="card-text text-muted">
                                        <p>Admin</p>
                                        <p className="m-0">
                                            <Link>admin@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-user shadow-sm">
                                <div className="card-header card-header-user">
                                    <img src={images.noAvatar} alt="avatar user" className="img-avatar" />
                                </div>
                                <div className="card-body text-center">
                                    <div className="card-title mt-5">
                                        <h5>Admin</h5>
                                    </div>
                                    <div className="card-text text-muted">
                                        <p>Admin</p>
                                        <p className="m-0">
                                            <Link>admin@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-user shadow-sm">
                                <div className="card-header card-header-user">
                                    <img src={images.noAvatar} alt="avatar user" className="img-avatar" />
                                </div>
                                <div className="card-body text-center">
                                    <div className="card-title mt-5">
                                        <h5>Admin</h5>
                                    </div>
                                    <div className="card-text text-muted">
                                        <p>Admin</p>
                                        <p className="m-0">
                                            <Link>admin@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-user shadow-sm">
                                <div className="card-header card-header-user">
                                    <img src={images.noAvatar} alt="avatar user" className="img-avatar" />
                                </div>
                                <div className="card-body text-center">
                                    <div className="card-title mt-5">
                                        <h5>Admin</h5>
                                    </div>
                                    <div className="card-text text-muted">
                                        <p>Admin</p>
                                        <p className="m-0">
                                            <Link>admin@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-user shadow-sm">
                                <div className="card-header card-header-user">
                                    <img src={images.noAvatar} alt="avatar user" className="img-avatar" />
                                </div>
                                <div className="card-body text-center">
                                    <div className="card-title mt-5">
                                        <h5>Admin</h5>
                                    </div>
                                    <div className="card-text text-muted">
                                        <p>Admin</p>
                                        <p className="m-0">
                                            <Link>admin@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#">
                                Previous
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Users;
