function Users() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Customers</h2>
            </div>
            <div className="card mb-4 shadow-sm">
                <div className="top">
                    <div className="search">
                        <input className="form-control" type="text" placeholder="Search...." />
                    </div>
                    <div className="filter">
                        <select name="show" id="">
                            <option value="20">Show 20</option>
                            <option value="30">Show 30</option>
                            <option value="40">Show 40</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;
