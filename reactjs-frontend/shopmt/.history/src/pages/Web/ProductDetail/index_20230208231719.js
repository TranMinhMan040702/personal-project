import { faStar, faCartShopping, faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';
import './productdetail.scss';
function ProductDetail() {
    const [image, setImage] = useState(null);
    useEffect(() => {
        setImage(images.products.p1);
    }, []);
    const handleImage = (e) => {
        console.log(e.target.src);
    };
    return (
        <div className="product-detail">
            <div className="product container d-flex justify-content-between">
                <div className="product-imgs">
                    <div className="images-container">
                        <img src={image} alt="" />
                    </div>
                    <div className="small-images-container d-flex justify-content-center">
                        <div className="small-images-item img-thumbnail">
                            <img src={images.products.p1} alt="" onMouseEnter={(e) => handleImage(e)} />
                        </div>
                        <div className="small-images-item img-thumbnail">
                            <img src={images.products.p2} alt="" onMouseEnter={(e) => handleImage(e)} />
                        </div>
                        <div className="small-images-item img-thumbnail">
                            <img src={images.products.p3} alt="" onMouseEnter={(e) => handleImage(e)} />
                        </div>
                        <div className="small-images-item img-thumbnail">
                            <img src={images.products.p4} alt="" onMouseEnter={(e) => handleImage(e)} />
                        </div>
                    </div>
                </div>
                <div className="product-des">
                    <div className="info">
                        <h4>Nhà giả kim</h4>
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
                        <h3>60.830 đ</h3>
                        <h5>80.000 đ</h5>
                        <span>-23%</span>
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
                            <span>5</span>
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
    );
}

export default ProductDetail;
