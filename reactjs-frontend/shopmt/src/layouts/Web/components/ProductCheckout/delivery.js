import { Link } from 'react-router-dom';
function Delivery() {
    return (
        <div className="delivery">
            <div className="product d-flex justify-content-between">
                <h6>Phương thức vận chuyển:</h6>
                <div className="d-flex align-items-center" style={{ 'margin-right': '120px' }}>
                    <h5>Giao hàng nhanh</h5>
                    <Link>Thay đổi</Link>
                </div>
                <h5>12.800 đ</h5>
            </div>
        </div>
    );
}

export default Delivery;
