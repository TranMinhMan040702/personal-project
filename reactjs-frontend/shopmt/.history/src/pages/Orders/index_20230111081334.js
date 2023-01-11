import './orders.scss';
function Orders() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Orders</h2>
            </div>
            <div className="content-main">
                <div className="top">
                    <div className="search">
                        <input type="text" placeholder="Search...." />
                    </div>
                    <div className="filter">
                        <div class="dropdown">
                            <button
                                class="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenu2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li>
                                    <button class="dropdown-item" type="button">
                                        Action
                                    </button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">
                                        Another action
                                    </button>
                                </li>
                                <li>
                                    <button class="dropdown-item" type="button">
                                        Something else here
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <select name="show" id="">
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </div>
                </div>
                <div className="center"></div>
            </div>
        </div>
    );
}

export default Orders;
