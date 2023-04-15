function Padding(props) {
    const { pagination, setPagination } = props;
    const { handleClickPrevious, handleClickNext, handleClickPage } = props;
    const { page, limit, totalPage } = pagination;

    const listPage = [];
    for (let i = 0; i < totalPage; i++) {
        listPage[i] = i + 1;
    }

    const handleClickPageNumber = (pageNumber) => {
        setPagination((prev) => {
            return { ...prev, page: pageNumber };
        });
    };

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
                                onClick={() => handleClickPageNumber(item - 1)}
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
