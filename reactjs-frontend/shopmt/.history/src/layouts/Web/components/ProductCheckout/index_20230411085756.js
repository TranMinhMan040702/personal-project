import { useState } from 'react';
import { useSelector } from 'react-redux';
import { cartUser, addressUser, deliveriseSystem, accountUser } from '../../../../redux/selectors';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatter } from '../../../../utils';
import { clearedCart } from '../../../../redux/slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import Receipt from './receipt';
import Location from './location';
import Delivery from './delivery';
import Payment from './payment';
import config from '../../../../config';
import OrderService from '../../../../services/OrderService';
import './productcheckout.scss';
function ProductCheckout() {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(cartUser);
    const account = useSelector(accountUser);
    // const [order, setOrder] = useState();

    // Address
    const addresses = useSelector(addressUser);
    const addressDefault = addresses.find((address) => address.status === true);
    const [addressCurrent, setAddressCurrent] = useState(addressDefault);
    const [addressOrder, setAddressOrder] = useState(addressDefault);

    // Delivery
    const deliverise = useSelector(deliveriseSystem);
    const deliveryDefault = deliverise[0];
    const [deliveryCurrent, setDeliveryCurrent] = useState(deliveryDefault);
    const [deliveryOrder, setDeliveryOrder] = useState(deliveryDefault);

    // Payment
    const [isPaidBefore, setIsPaidBefore] = useState(false);
    const handleAddress = () => {
        return (
            addressOrder.username +
            ', ' +
            addressOrder.street +
            ', ' +
            addressOrder.ward +
            ', ' +
            addressOrder.district +
            ', ' +
            addressOrder.province
        );
    };
    const handleOrderItem = () => {
        return cart.map((item) => {
            return { count: item.count, product: item.product };
        });
    };

    // Order
    const handleOrder = async () => {
        try {
            const response = await OrderService.createOrder({
                address: handleAddress(),
                phone: addressOrder.phone,
                paidBefore: isPaidBefore,
                amountFromUser: handleTotalPrice() + deliveryOrder.price,
                user: { id: account.id },
                delivery: deliveryOrder,
                orderItems: handleOrderItem(),
            });
            toast.success(config.message.success.order);
            dispath(clearedCart(account.cartId));
            navigate('/user/purchase?state=ALL');
        } catch (err) {
            console.log(err);
        }
    };
    // index
    const handleTotalPrice = () => {
        const totalPrice = cart.reduce((acc, curr) => {
            return acc + curr.product.promotionalPrice * curr.count;
        }, 0);
        return totalPrice;
    };
    // console.log(addressOrder);
    // console.log(deliveryOrder);
    // console.log(isPaidBefore);
    // console.log(order);

    return (
        <>
            <Location
                addresses={addresses}
                addressCurrent={addressCurrent}
                setAddressCurrent={setAddressCurrent}
                addressOrder={addressOrder}
                setAddressOrder={setAddressOrder}
            />
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
                                                        src={item.product.images[0]}
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
                    <Delivery
                        deliverise={deliverise}
                        deliveryCurrent={deliveryCurrent}
                        setDeliveryCurrent={setDeliveryCurrent}
                        deliveryOrder={deliveryOrder}
                        setDeliveryOrder={setDeliveryOrder}
                    />
                    <div className="finish">
                        <div className="product">
                            <Payment
                                isPaidBefore={isPaidBefore}
                                setIsPaidBefore={setIsPaidBefore}
                            />
                            <Receipt
                                handleTotalPrice={handleTotalPrice}
                                deliveryOrder={deliveryOrder}
                                handleOrder={handleOrder}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </>
    );
}

export default ProductCheckout;
