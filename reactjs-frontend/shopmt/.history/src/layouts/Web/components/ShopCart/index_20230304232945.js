/* eslint-disable react-hooks/exhaustive-deps */
import './shopcart.scss';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import config from '../../../../config';
import { useSelector } from 'react-redux';
import { cartUser } from '../../../../redux/selectors';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../../redux/slice';

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
        // count amount product item
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
    }, []);

    // total price
    const handleTotalPrice = () => {
        const totalPrice = listProducts.reduce((acc, curr) => {
            return acc + curr.product.promotionalPrice * curr.count;
        }, 0);
        return totalPrice;
    };

    const handleIncreaseCount = (data) => {
        dispatch(cartSlice.actions.addToCart(data));
    };

    return (
        <div className="shop-cart">
            <div className="container cart-items d-flex justify-content-between">
                {listProducts.length}
                <div className="cart-list">
                    {listProducts.map((item, i) => {
                        return <CartItem key={i} item={item} />;
                    })}
                </div>
                <div className="product cart-total">
                    <h2>Giỏ hàng</h2>
                    <div className="d-flex justify-content-between">
                        <h4>Tổng giá :</h4>
                        <h3>{handleTotalPrice()}.00 vnd</h3>
                    </div>
                    <Link to={config.routes.web.checkout}>Thanh toán</Link>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;
