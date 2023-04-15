function ProductLike() {
    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Sản phẩm yêu thích của tôi</h5>
            </div>
            <div className="purchase">
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
                    <div className="infor d-flex flex-column justify-content-center">
                        <h4>Nhà giả kim</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLike;
