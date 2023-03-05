/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { cartUser } from '../../../../redux/selectors';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../../redux/slice';
import { toast } from 'react-toastify';
import SummaryCart from './SummaryCart';
import CartItem from './CartItem';
import './shopcart.scss';

function ShopCart() {
    const cart = useSelector(cartUser);
    const dispatch = useDispatch();
    const [listProducts, setListProducts] = useState([]);

    // find product unique
    const handleUniqueCart = () => {
        let arr = [];
        cart.forEach((e) => {
            if (arr.length > 0) {
                if (arr.find((p) => p.id === e.id) === undefined) {
                    arr.push(e);
                }
            } else {
                arr.push(e);
            }
        });
        return arr;
    };
    useEffect(() => {
        const handleCountItem = () => {
            const uniqueCart = handleUniqueCart();
            setListProducts([]);
            uniqueCart.forEach((item) => {
                const count = cart.filter((e) => e.id === item.id).length;
                setListProducts((prev) => [
                    ...prev,
                    {
                        count: count,
                        product: item,
                    },
                ]);
            });
        };
        return handleCountItem();
    }, [cart]);

    // total price
    const handleTotalPrice = () => {
        const totalPrice = listProducts.reduce((acc, curr) => {
            return acc + curr.product.promotionalPrice * curr.count;
        }, 0);
        return totalPrice;
    };

    const handleIncreaseCount = (data) => {
        dispatch(cartSlice.actions.addToCart(data));
        toast.success('Đã thêm vào giỏ hàng');
    };

    const handleDecreaseCount = (id) => {
        dispatch(cartSlice.actions.deleteOneItem(id));
    };

    const handleRemoveItem = (id) => {
        const data = cart.filter((e) => e.id !== id);
        dispatch(cartSlice.actions.removeItem(data));
    };

    return (
        <div className="shop-cart">
            <div className="container cart-items d-flex justify-content-between">
                {listProducts.length !== 0 ? (
                    <>
                        <div className="cart-list">
                            {listProducts.map((item, i) => {
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
                    <p>Giỏ hàng trống</p>
                )}
            </div>
        </div>
    );
}

export default ShopCart;
