import './addProduct.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductService from '../../../services/ProductService';
function AddProduct() {
    const [imageData, setImageData] = useState(null);
    // const [fileImage, setFileImage] = useState(null);
    const [product, setProduct] = useState({});

    const handleUploadClick = (e) => {
        let file = e.target.files[0];
        const imageData = new FormData();
        imageData.append('file', file);
        setImageData(imageData);
        setProduct({ file: imageData });
    };

    const AddProduct = (e) => {
        e.preventDefault();

        ProductService.addProduct(imageData)
            .then((resp) => {
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(imageData);

    return (
        <div className="product">
            <div className="content-header d-flex justify-content-between align-items-center">
                <div className="title">
                    <h2>Add Product</h2>
                </div>
                <Link className="btn btn-danger">Go to products</Link>
            </div>
            <div className="card shadow-sm">
                <div className="card-body">
                    <form enctype="multipart/form-data">
                        <div className="row">
                            {/* <div class="mb-3 col-lg-6">
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
                            <div class="mb-3 col-lg-6">
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
                            </div> */}
                            <div class="mb-3">
                                <label for="formFileMultiple" class="form-label">
                                    Chooses image for product
                                </label>
                                <div className="row">
                                    {/* <div className="col-lg-3">
                                        <input class="form-control" type="file" id="" multiple />
                                    </div>
                                    <div className="col-lg-3">
                                        <input class="form-control" type="file" id="" multiple />
                                    </div>
                                    <div className="col-lg-3">
                                        <input class="form-control" type="file" id="" multiple />
                                    </div> */}
                                    <div className="col-lg-3">
                                        <input
                                            accept="image/*"
                                            onChange={handleUploadClick}
                                            class="form-control"
                                            type="file"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="md-3 d-flex justify-content-end">
                                <button onClick={(e) => AddProduct(e)} class="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
