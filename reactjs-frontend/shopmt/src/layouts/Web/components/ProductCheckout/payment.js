function Payment() {
    return (
        <div className="method-checkout d-flex justify-content-between">
            <h6>Phương thức thanh toán</h6>
            <div className="method d-flex align-items-center">
                <input id="method-1" type="radio" value="Thanh toán khi nhận hàng" name="method" required />
                <label htmlFor="method-1">Thanh toán khi nhận hàng</label>
            </div>
            <div className="method d-flex align-items-center">
                <input id="method-2" type="radio" value="Thanh toán Paypal" name="method" required />
                <label htmlFor="method-2">Paypal</label>
            </div>
        </div>
    );
}

export default Payment;
