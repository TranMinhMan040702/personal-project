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
                        <input type="text" class="form-control" id="productname" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">
                            Password
                        </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">
                            Check me out
                        </label>
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
