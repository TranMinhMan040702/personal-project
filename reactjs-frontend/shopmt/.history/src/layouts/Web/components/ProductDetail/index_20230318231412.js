/* eslint-disable react-hooks/exhaustive-deps */
import { faStar, faCartShopping, faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../../../../redux/slice/cartSlice';
import { accountUser } from '../../../../redux/selectors';
import { useSelector } from 'react-redux';
import ProductService from '../../../../services/ProductService';
import config from '../../../../config';
import './productdetail.scss';

function ProductDetail() {
    const PRODUCT_URL = process.env.REACT_APP_BASE_URL + '/images/products';
    const account = useSelector(accountUser);
    const param = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    const [image, setImage] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        getProductById(param.id);
    }, []);

    const getProductById = async (id) => {
        try {
            const response = await ProductService.getProductById(id);
            setProduct(response.data);
            setImage(PRODUCT_URL + '\\' + response.data.images[0]);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleImage = (e) => {
        setImage(e.target.src);
    };

    const handleIncreaseCount = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecreaseCount = () => {
        setCount((prev) => {
            if (prev <= 1) return 1;
            return prev - 1;
        });
    };

    const handleAddToCart = (data, count) => {
        dispatch(addToCart({ cartId: account.cartId, count: count, product: product }));
        toast.success(config.message.addToCartSuccess);
    };

    return (
        <>
            <ToastContainer autoClose={2000} />
            {product && (
                <div className="product-detail background">
                    <div className="product container d-flex justify-content-between">
                        <div className="product-imgs">
                            <div className="images-container">
                                <img src={image} alt="" />
                            </div>
                            <div className="small-images-container d-flex justify-content-center">
                                {product.images.map((image) => {
                                    return (
                                        <div className="small-images-item img-thumbnail">
                                            <img
                                                src={PRODUCT_URL + '\\' + image}
                                                alt=""
                                                onMouseEnter={(e) => handleImage(e)}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="product-des">
                            <div className="info">
                                <h4>{product.name}</h4>
                                <span>
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <FontAwesomeIcon className="icon" icon={faStar} />
                                    <span>(5 rating)</span>
                                </span>
                            </div>
                            <div className="price d-flex align-items-center">
                                <h3>{product.promotionalPrice} đ</h3>
                                <h5>{product.price} đ</h5>
                                <span>
                                    {Math.round(((product.price - product.promotionalPrice) / product.price) * 100)}%
                                </span>
                            </div>
                            <div className="delivery-policy">
                                <div className="delivery d-flex">
                                    <div className="title">Thời gian giao hàng:</div>
                                    <span>Giao hàng đến: xã Tân Lập, huyện Tịnh Biên, tỉnh An Giang</span>
                                </div>
                                <div className="policy d-flex">
                                    <div className="title">Chính sách đổi trả:</div>{' '}
                                    <span>Đổi trả sản phẩm trong vòng 30 ngày</span>
                                </div>
                            </div>
                            <div className="quantity d-flex align-items-center">
                                <h4>Số lượng:</h4>
                                <div className="button-qty">
                                    <button onClick={() => handleDecreaseCount()}>
                                        <FontAwesomeIcon icon={faSubtract} />
                                    </button>
                                    <span>{count}</span>
                                    <button onClick={() => handleIncreaseCount()}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <div className="control-btn d-flex align-items-center justify-content-start">
                                <button className="add-to-cart" onClick={() => handleAddToCart(product, count)}>
                                    <span>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </span>
                                    Add to cart
                                </button>
                                <button className="buy-now">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductDetail;
