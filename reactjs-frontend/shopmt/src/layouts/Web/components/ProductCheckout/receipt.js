function Receipt({ handleTotalPrice }) {
    return (
        <div className="receipt d-flex justify-content-end">
            <div className="detail">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Tổng tiền hàng</h5>
                    <span>{handleTotalPrice()}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Phí vận chuyển</h5>
                    <span>12.000.00 đ</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Tổng thanh toán</h5>
                    <h3>212.000.00 đ</h3>
                </div>
            </div>
            <div className="line"></div>
            <button>Đặt hàng</button>
        </div>
    );
}

export default Receipt;
