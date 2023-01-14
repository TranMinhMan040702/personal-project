import './addProduct.scss';
import { Link } from 'react-router-dom';
function AddProduct() {
    return (
        <div className="product">
            <div className="content-header d-flex justify-content-between">
                <div className="title">
                    <h2>Add Product</h2>
                </div>
                <Link className="btn btn-danger">Go to products</Link>
            </div>
            <div className="card shadow-sm">
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div class="mb-3 col-lg-6">
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
                            <div class="mb-3 col-lg-6">
                                <label for="categoryid" class="form-label">
                                    Category Id
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="categoryid"
                                    required
                                    placeholder="Enter category"
                                />
                            </div>
                            <div class="mb-3 col-lg-6">
                                <label for="price" class="form-label">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="price"
                                    required
                                    placeholder="Enter product price"
                                />
                            </div>
                            <div class="mb-3 col-lg-6">
                                <label for="promotionalPrice" class="form-label">
                                    Promotional Price
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="promotionalPrice"
                                    required
                                    placeholder="Enter product promotional price"
                                />
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="quantity" class="form-label">
                                Quantity
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="quantity"
                                required
                                placeholder="Enter product quantity"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">
                                Description
                            </label>
                            <textarea
                                class="form-control"
                                id="description"
                                rows="5"
                                required
                                placeholder="Enter product description"
                            ></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="formFileMultiple" class="form-label">
                                Chooses image for product
                            </label>
                            <div className="row">
                                <div className="col-lg-3">
                                    <input class="form-control" type="file" id="" multiple />
                                </div>
                                <div className="col-lg-3">
                                    <input class="form-control" type="file" id="" multiple />
                                </div>
                                <div className="col-lg-3">
                                    <input class="form-control" type="file" id="" multiple />
                                </div>
                                <div className="col-lg-3">
                                    <input class="form-control" type="file" id="" multiple />
                                </div>
                            </div>
                        </div>
                        <div className="md-3 d-flex justify-content-end">
                            <button type="submit" class="btn btn-success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
