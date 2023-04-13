function Padding({ handleClickPageNumber, handleClickNext, handleClickPrevious }) {
    return (
        <nav className="pagination justify-content-center mt-4">
            <ul class="pagination">
                <li class="page-item disabled">
                    <button class="page-link" href="#">
                        Previous
                    </button>
                </li>
                <li class="page-item active">
                    <button class="page-link" href="#">
                        1
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link" href="#">
                        2
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link" href="#">
                        3
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link" href="#">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Padding;
