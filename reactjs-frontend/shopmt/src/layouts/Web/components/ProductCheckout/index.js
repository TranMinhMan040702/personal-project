import Location from './location';
import Delivery from './delivery';
import Payment from './payment';
import { useSelector } from 'react-redux';
import { cartUser } from '../../../../redux/selectors';
import { formatter } from '../../../../utils';
import './productcheckout.scss';
import Receipt from './receipt';
function ProductCheckout() {
    const IMAGE_URL = process.env.REACT_APP_IMAGE_API_URL;
    const cart = useSelector(cartUser);
    const handleTotalPrice = () => {
        const totalPrice = cart.reduce((acc, curr) => {
            return acc + curr.product.promotionalPrice * curr.count;
        }, 0);
        return formatter(totalPrice);
    };
    return (
        <>
            <Location />
            <div className="productCheckout background">
                <div className="container">
                    <div className="cart-list">
                        {cart &&
                            cart.map((item, index) => {
                                return (
                                    <div className="product cart-item" key={index}>
                                        <div className="cart-details d-flex align-items-center justify-content-between">
                                            <div className="name d-flex align-items-center">
                                                <div className="cart-image d-flex">
                                                    <img
                                                        src={
                                                            IMAGE_URL +
                                                            '\\' +
                                                            item.product.images[0]
                                                        }
                                                        alt="product"
                                                    />
                                                </div>
                                                <h4>{item.product.name}</h4>
                                            </div>
                                            <div className="price">
                                                <span>Đơn giá</span>
                                                <h5>{formatter(item.product.promotionalPrice)}</h5>
                                            </div>
                                            <div className="quatity">
                                                <span>Số lượng</span>
                                                <h5>{item.count}</h5>
                                            </div>
                                            <div className="total">
                                                <span>Thành tiền</span>
                                                <h5>
                                                    {formatter(
                                                        item.product.promotionalPrice * item.count,
                                                    )}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <Delivery />
                    <div className="finish">
                        <div className="product">
                            <Payment />
                            <Receipt handleTotalPrice={handleTotalPrice} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCheckout;
