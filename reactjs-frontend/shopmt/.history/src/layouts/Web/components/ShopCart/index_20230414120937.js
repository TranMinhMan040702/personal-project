/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { cartUser } from '../../../../redux/selectors';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import SummaryCart from './SummaryCart';
import CartItem from './CartItem';
import config from '../../../../config';
import './shopcart.scss';
import {
    addToCart,
    deleteAllProductInCartItem,
    deleteOneProductInCartItem,
} from '../../../../redux/slice/cartSlice';
import { formatter } from '../../../../utils';
import Empty from '../../../../components/Empty';
import images from '../../../../assets/images';

function ShopCart() {
    const cart = useSelector(cartUser);
    const dispatch = useDispatch();

    // total price
    const handleTotalPrice = () => {
        const totalPrice = cart.reduce((acc, curr) => {
            return acc + curr.product.promotionalPrice * curr.count;
        }, 0);
        return formatter(totalPrice);
    };

    const handleIncreaseCount = (data) => {
        dispatch(addToCart(data));
    };

    const handleDecreaseCount = (id) => {
        const cartItem = cart.find((cartItem) => cartItem.id === id);
        if (cartItem.count > 1) {
            dispatch(deleteOneProductInCartItem(id));
        }
    };

    const handleRemoveItem = (id) => {
        dispatch(deleteAllProductInCartItem(id));
        toast.warning(config.message.success.removeItemInCart);
    };

    return (
        <div className="shop-cart">
            <ToastContainer autoClose={1000} pauseOnHover={false} />
            <div className="container cart-items d-flex justify-content-between">
                {cart.length !== 0 ? (
                    <>
                        <div className="cart-list">
                            {cart.map((item, i) => {
                                return (
                                    <CartItem
                                        key={i}
                                        item={item}
                                        handleIncreaseCount={handleIncreaseCount}
                                        handleDecreaseCount={handleDecreaseCount}
                                        handleRemoveItem={handleRemoveItem}
                                    />
                                );
                            })}
                        </div>
                        <SummaryCart handleTotalPrice={handleTotalPrice()} />
                    </>
                ) : (
                    <div className="product background">
                        <Empty title="Giỏi hàng trống" image={images.cartEmpty} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShopCart;
