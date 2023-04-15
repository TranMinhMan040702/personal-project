function ProductLike() {
    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Sản phẩm yêu thích của tôi</h5>
            </div>
            <div className="product-like-list">
                <div className="cart-details d-flex align-items-center justify-content-start">
                    <div className="name" style={{ width: '13%' }}>
                        <div className="cart-image d-flex">
                            <img
                                className="img-thumbnail"
                                // src={item.product.images[0]}
                                alt="product"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLike;
