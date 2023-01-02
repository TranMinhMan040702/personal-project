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
                        <input type="text" class="form-control" id="productname" />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">
                            Price
                        </label>
                        <input type="number" class="form-control" id="price" />
                    </div>
                    <div class="mb-3">
                        <label for="promotionalPrice" class="form-label">
                            Promotional Price
                        </label>
                        <input type="number" class="form-control" id="promotionalPrice" />
                    </div>
                    <div class="mb-3">
                        <label for="quantity" class="form-label">
                            Quantity
                        </label>
                        <input type="number" class="form-control" id="quantity" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
