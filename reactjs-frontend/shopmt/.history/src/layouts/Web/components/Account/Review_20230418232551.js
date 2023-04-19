import { useState } from 'react';
import Loading from '../../../../components/Loading';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Review() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Viết đánh giá</h5>
            </div>
            <div className="review">
                <div className="review-header">
                    <div className="time">Giao hàng vào ngày 04 tháng 04 năm 2023</div>
                    <div className="des">
                        Nhận xét và đánh giá sản phẩm đã mua (5 sao: Rất Tốt - 1 sao: Rất Tệ):
                    </div>
                </div>
                <div className="review-rating d-flex align-items-start justify-content-center">
                    <div className="image">
                        <img src={images.products.p1} alt="" />
                    </div>
                    <div className="rating">
                        <div className="info-product">
                            <h6>Tên sản phẩm</h6>
                            <p>Mô tả sản phẩm</p>
                        </div>
                        <div className="star">
                            <div className="rating-star">
                                <div className="container-star">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="text-rating">Tuyệt vời</div>
                            </div>
                        </div>
                        <div className="input-title">Đánh giá chi tiết</div>
                        <div className="input-wrap">
                            <span>
                                <textarea
                                    name="content"
                                    cols="30"
                                    rows="4"
                                    type="text"
                                    placeholder="Bạn nghĩ gì về sản phẩm này"
                                ></textarea>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
