function Padding(props) {
    return (
        <nav className="pagination justify-content-center mt-4">
            <ul class="pagination">
                <li class="page-item disabled">
                    <button class="btn btn-sm btn-primary mx-1">Previous</button>
                </li>
                <li class="page-item active">
                    <button class="btn btn-sm btn-primary mx-1">1</button>
                </li>
                <li class="page-item">
                    <button class="btn btn-sm btn-primary mx-1">2</button>
                </li>
                <li class="page-item">
                    <button class="btn btn-sm btn-primary mx-1">3</button>
                </li>
                <li class="page-item">
                    <button class="btn btn-sm btn-primary mx-1 disabled">Next</button>
                </li>
            </ul>
        </nav>
    );
}

export default Padding;
