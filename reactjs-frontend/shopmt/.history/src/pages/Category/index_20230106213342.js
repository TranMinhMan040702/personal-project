import './category.scss';
import Datatable from '../../components/Datatable/Datatable';
function Category() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Categorise</h2>
            </div>
            <div className="row category-content">
                <div className="col-4">
                    <div className="create-category">
                        <form action="">
                            <div class="mb-3">
                                <label for="categoryname" class="form-label">
                                    Category Name
                                </label>
                                <input type="text" id="categoryname" required placeholder="Enter category name" />
                            </div>
                            <div className="md-3">
                                <button type="submit" class="btn btn-success btn-lg btn-create-category">
                                    Create Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-8">
                    <div className="list-category"></div>
                </div>
            </div>
        </div>
    );
}

export default Category;
