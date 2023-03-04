import { Link } from 'react-router-dom';
import config from '../../../../config';
function SummaryCart({ props }) {
    return (
        <div className="product cart-total">
            <h2>Giỏ hàng</h2>
            <div className="d-flex justify-content-between">
                <h4>Tổng giá :</h4>
                <h3>{handleTotalPrice()}.00 vnd</h3>
            </div>
            <Link to={config.routes.web.checkout}>Thanh toán</Link>
        </div>
    );
}

export default SummaryCart;
