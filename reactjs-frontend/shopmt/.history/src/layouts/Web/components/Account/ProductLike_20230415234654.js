function ProductLike() {
    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Địa chỉ của tôi</h5>
                <button
                    type="button"
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-address"
                >
                    Thêm địa chỉ mới
                </button>
            </div>
            <div className="address-list"></div>
        </div>
    );
}

export default ProductLike;
