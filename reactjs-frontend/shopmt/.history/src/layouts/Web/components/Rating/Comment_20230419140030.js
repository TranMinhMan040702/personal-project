import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faStar, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
function Comment({ reviews }) {
    return (
        <>
            {reviews.map((review) => {
                return (
                    <div className="comment d-flex justify-content-between">
                        <div className="comment-info d-flex flex-column justify-content-start align-items-center">
                            <h5>Trần Mẫn</h5>
                            <div className="image">
                                <img src={images.products.p3} alt="" />
                            </div>
                            <p>09/02/2023</p>
                        </div>
                        <div className="comment-detail">
                            <div className="comment-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="comment-content">
                                Quá nhiều cảm xúc hòa lẫn trong tâm trí tôi sau khi đọc xong quyển
                                sách này. Quyển sách là tiếng nói, là nỗi lòng của một đứa trẻ mà
                                theo tôi bất cứ ai khi đọc xong cũng nhận ra rằng tình yêu thương,
                                sự quan tâm có vai trò lớn lao thế nào đối với trẻ. Cậu bé Zezé năm
                                tuổi trong câu chuyện cũng hồn nhiên, trong sáng như Anne tóc đỏ,
                                như cô bé Heidi, cũng có phần nghịch ngợm như thằng nhóc Emil. Cậu
                                bé đã khiến tôi phì cười không ít lần. Dù hay gây ra rắc rối nhưng
                                Zezé là một em bé theo tôi là rất đáng yêu. Truyện đưa ta đến với
                                những trò quậy phá, những vụn vặt ngày thường của cậu bé nhưng không
                                hề nhàm chán chút nào cả
                            </div>
                            <div className="like-report d-flex align-items-center">
                                <Link className="like d-flex align-items-center">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p>
                                        thích <span>(2)</span>
                                    </p>
                                </Link>
                                <Link className="report d-flex align-items-center">
                                    <FontAwesomeIcon icon={faWarning} />
                                    <p>báo cáo</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Comment;
