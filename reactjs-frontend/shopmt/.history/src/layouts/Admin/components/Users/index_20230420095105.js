import { useEffect } from 'react';
import { useState } from 'react';
import UserService from '../../../../services/UserService';
import { convertParams } from '../../../../utils';
import Paging from '../../../../components/Paging';
import images from '../../../../assets/images';
import './users.scss';
function Users() {
    const [params, setParams] = useState({
        page: '',
        limit: '',
        sortBy: '',
        search: '',
    });
    const [users, setUsers] = useState([]);
    const [pagination, setPagination] = useState({
        page: '',
        limit: '',
        totalPage: '',
    });
    const handleClickPrevious = () => {
        setParams((prev) => {
            return { ...prev, page: String(Number(prev.page) - 1) };
        });
    };
    const handleClickNext = () => {
        setParams((prev) => {
            return { ...prev, page: String(Number(prev.page) + 1) };
        });
    };
    const handleClickPage = (pageNumber) => {
        setParams((prev) => {
            return { ...prev, page: String(pageNumber) };
        });
    };

    useEffect(() => {
        getUsers(convertParams(params));
    }, [params]);
    const getUsers = async (requestParams) => {
        try {
            const response = await UserService.getUsers(requestParams);
            console.log(response.data);
            setUsers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) => {
        setParams((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Customers</h2>
            </div>
            <div className="card mb-4 mt-3 shadow-sm">
                <div className="card-header">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input
                                className="form-control"
                                type="text"
                                name="search"
                                placeholder="Search...."
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select
                                className="form-select"
                                name="limit"
                                id=""
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="20">Show 20</option>
                                <option value="30">Show 30</option>
                                <option value="40">Show 40</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {users &&
                            users.map((user) => {
                                return (
                                    <div className="col">
                                        <div className="card card-user shadow-sm">
                                            <div className="card-header card-header-user">
                                                <img
                                                    src={user.avatar || images.noAvatar}
                                                    alt="avatar user"
                                                    className="img-avatar"
                                                />
                                            </div>
                                            <div className="card-body text-center">
                                                <div className="card-title mt-5">
                                                    <h5>{user.firstname + ' ' + user.lastname}</h5>
                                                </div>
                                                <div className="card-text text-muted">
                                                    <p>{user.role}</p>
                                                    <p className="m-0">
                                                        <a href={'mailto:' + user.email}>
                                                            {user.email}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <Paging
                        pagination={pagination}
                        setPagination={setPagination}
                        handleClickPrevious={handleClickPrevious}
                        handleClickNext={handleClickNext}
                        handleClickPage={handleClickPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Users;
