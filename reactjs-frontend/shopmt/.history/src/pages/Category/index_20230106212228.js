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
                            <label for="categoryname" class="form-label">
                                Category Name
                            </label>
                            <input type="text" class="" id="categoryname" required placeholder="Enter category name" />
                        </div>
                        <div className="md-3 ">
                            <button type="submit" class="btn btn-success btn-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="list-category">list category</div>
            </div>
        </div>
    );
}

export default Category;
