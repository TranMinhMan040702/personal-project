import { formatter } from '../../../../utils';
import Modal from '../../../../components/Modal';
function Delivery({
    deliverise,
    deliveryOrder,
    deliveryCurrent,
    setDeliveryOrder,
    setDeliveryCurrent,
}) {
    const modalHeader = 'Chọn phương thức thanh toán';
    const modalBody = (
        <div className="address-list">
            {deliverise &&
                deliverise.map((delivery, index) => {
                    return (
                        <div
                            key={index}
                            className="address-item d-flex justify-content-start align-items-start"
                        >
                            <input
                                id=""
                                className="input-control"
                                style={{ width: '10%', marginTop: '5px', height: '16px' }}
                                type="radio"
                                name="deliveryOrder"
                                value={delivery.id}
                                onChange={() => setDeliveryCurrent(delivery)}
                                checked={delivery.id === deliveryCurrent.id}
                            />
                            <label htmlFor="">
                                <div className="address">
                                    <div className="name-phone mb-1">
                                        <span className="name">{delivery.name}</span>
                                        <span
                                            className="phone"
                                            style={{
                                                color: 'var(--primary-color-web)',
                                                fontSize: '20px',
                                            }}
                                        >
                                            {formatter(delivery.price)}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    );
                })}
        </div>
    );
    const modalFooter = (
        <>
            <button
                type="button"
                class="btn btn-sm btn-secondary modal-address"
                data-bs-dismiss="modal"
                onClick={() => setDeliveryCurrent(deliveryOrder)}
            >
                Hủy
            </button>
            <button
                type="submit"
                data-bs-dismiss="modal"
                class="btn btn-sm btn-success"
                onClick={() => setDeliveryOrder(deliveryCurrent)}
            >
                Xác nhận
            </button>
        </>
    );

    return (
        <div className="delivery">
            {deliveryOrder && (
                <div className="product d-flex justify-content-between">
                    <h6>Phương thức vận chuyển:</h6>
                    <div className="d-flex align-items-center" style={{ 'margin-right': '120px' }}>
                        <h5>{deliveryOrder.name}</h5>
                        <button
                            className="btn btn-sm btn-link text-decoration-none"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-delivery"
                        >
                            Thay đổi
                        </button>
                    </div>
                    <h5>{formatter(deliveryOrder.price)}</h5>
                </div>
            )}
            <Modal
                modalHeader={modalHeader}
                modalBody={modalBody}
                modalFooter={modalFooter}
                modalId={'modal-delivery'}
            />
        </div>
    );
}

export default Delivery;
