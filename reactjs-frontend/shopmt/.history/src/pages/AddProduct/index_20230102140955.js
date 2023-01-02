import './addProduct.scss';
function AddProduct() {
    return (
        <div className="product">
            <div className="top">
                <h2>Add Product</h2>
            </div>
            <div className="product-form">
                <form>
                    <div class="mb-3">
                        <label for="productname" class="form-label">
                            Product name
                        </label>
                        <input type="text" class="form-control" id="productname" required />
                    </div>
                    <div class="mb-3">
                        <label for="categoryid" class="form-label">
                            Category Id
                        </label>
                        <input type="text" class="form-control" id="categoryid" required />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">
                            Price
                        </label>
                        <input type="number" class="form-control" id="price" required />
                    </div>
                    <div class="mb-3">
                        <label for="promotionalPrice" class="form-label">
                            Promotional Price
                        </label>
                        <input type="number" class="form-control" id="promotionalPrice" required />
                    </div>
                    <div class="mb-3">
                        <label for="quantity" class="form-label">
                            Quantity
                        </label>
                        <input type="number" class="form-control" id="quantity" required />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">
                            Description
                        </label>
                        <textarea class="form-control" id="description" rows="5" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">
                            Chooses image for product
                        </label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                    </div>
                    <div className="md-3">
                        <button type="submit" class="btn btn-success btn-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
