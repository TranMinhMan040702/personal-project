function Padding(props) {
    const { setParams } = props;
    const { pagination, setPagination } = props;
    const { page, limit, totalPage } = pagination;

    const listPage = [];
    for (let i = 0; i < totalPage; i++) {
        listPage[i] = i + 1;
    }

    const handleClickPrevious = () => {};

    const handleClickNext = () => {};

    const handlePage = () => {};
    return (
        <nav className="pagination justify-content-center mt-4">
            <ul class="pagination">
                <li class="page-item disabled">
                    <button
                        class="btn btn-sm btn-primary mx-1"
                        disabled={page <= 1}
                        onClick={() => handleClickPrevious()}
                    >
                        Previous
                    </button>
                </li>
                <li class="page-item">
                    {listPage.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`btn btn-sm btn-outline-primary mx-1 + ${
                                    item - 1 === page ? 'active' : ''
                                }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                </li>

                <li class="page-item">
                    <button
                        className="btn btn-sm btn-primary mx-1 disabled"
                        disabled={page >= totalPage}
                        onClick={() => handleClickNext()}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Padding;
