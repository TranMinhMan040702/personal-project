import './category.scss';
function Category() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Categorise</h2>
            </div>
            <div className="category-content">
                <div className="create-category">
                    <form action="">
                        <div class="mb-3">
                            <label for="productname" class="form-label">
                                Product name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="productname"
                                required
                                placeholder="Enter product name"
                            />
                        </div>
                    </form>
                </div>
                <div className="list-category">list category</div>
            </div>
        </div>
    );
}

export default Category;
