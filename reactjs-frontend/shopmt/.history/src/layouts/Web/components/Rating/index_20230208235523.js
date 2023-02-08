import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './rating.scss';
function Rating() {
    return (
        <div className="product-rating">
            <div className="product container">
                <div className="rating-top">
                    <h3>Đánh giá sản phẩm</h3>
                    <div className="rating-statistics d-flex justify-content-between">
                        <div className="left">
                            <h2>
                                5<span>/5</span>
                            </h2>
                            <span rating-star>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <p>(2 đánh giá)</p>
                        </div>
                        <div className="right">
                            <div className="d-flex">
                                <span>5 sao</span>
                                <div className="review-rating"></div>
                                <span>100%</span>
                            </div>
                            <div className="d-flex">
                                <span>4 sao</span>
                                <div className="review-rating"></div>
                                <span>0%</span>
                            </div>
                            <div className="d-flex">
                                <span>3 sao</span>
                                <div className="review-rating"></div>
                                <span>0%</span>
                            </div>
                            <div className="d-flex">
                                <span>2 sao</span>
                                <div className="review-rating"></div>
                                <span>0%</span>
                            </div>
                            <div className="d-flex">
                                <span>1 sao</span>
                                <div className="review-rating"></div>
                                <span>0%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
