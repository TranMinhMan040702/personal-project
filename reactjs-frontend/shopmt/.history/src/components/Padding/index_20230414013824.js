import { Link } from 'react-router-dom';
function Padding({ handleClickPageNumber, handleClickNext, handleClickPrevious }) {
    return (
        <nav className="pagination justify-content-center mt-4">
            <ul class="pagination">
                <li class="page-item disabled">
                    <Link class="page-link" href="#">
                        Previous
                    </Link>
                </li>
                <li class="page-item active">
                    <Link class="page-link" href="#">
                        1
                    </Link>
                </li>
                <li class="page-item">
                    <Link class="page-link" href="#">
                        2
                    </Link>
                </li>
                <li class="page-item">
                    <Link class="page-link" href="#">
                        3
                    </Link>
                </li>
                <li class="page-item">
                    <Link class="page-link" href="#">
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Padding;
