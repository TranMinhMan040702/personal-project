import { formatter } from '../../../../utils';
function Receipt({ handleTotalPrice, deliveryOrder, handleOrder }) {
    return (
        <div className="receipt d-flex justify-content-end">
            <div className="detail">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Tổng tiền hàng</h5>
                    <span>{formatter(handleTotalPrice())}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Phí vận chuyển</h5>
                    <span>{formatter(deliveryOrder.price)}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5>Tổng thanh toán</h5>
                    <h3>{formatter(handleTotalPrice() + deliveryOrder.price)}</h3>
                </div>
            </div>
            <div className="line"></div>
            <button onClick={() => handleOrder()}>Đặt hàng</button>
        </div>
    );
}

export default Receipt;
