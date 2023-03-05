/* eslint-disable react-hooks/exhaustive-deps */
import { faStar, faCartShopping, faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../../../../services/ProductService';
import './productdetail.scss';

function ProductDetail() {
    const PRODUCT_URL = process.env.REACT_APP_BASE_URL + '/images/products';
    const param = useParams();
    const [product, setProduct] = useState();

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

    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        setImage(e.target.src);
    };

    return (
        <>
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
                                    <button>
                                        <FontAwesomeIcon icon={faSubtract} />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <div className="control-btn d-flex align-items-center justify-content-start">
                                <button className="add-to-cart">
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
