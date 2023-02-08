import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faStar, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Comment() {
    return (
        <div className="comment">
            <div className="comment-info">
                <h3>Trần Mẫn</h3>
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
                    Quá nhiều cảm xúc hòa lẫn trong tâm trí tôi sau khi đọc xong quyển sách này. Quyển sách là tiếng
                    nói, là nỗi lòng của một đứa trẻ mà theo tôi bất cứ ai khi đọc xong cũng nhận ra rằng tình yêu
                    thương, sự quan tâm có vai trò lớn lao thế nào đối với trẻ. Cậu bé Zezé năm tuổi trong câu chuyện
                    cũng hồn nhiên, trong sáng như Anne tóc đỏ, như cô bé Heidi, cũng có phần nghịch ngợm như thằng nhóc
                    Emil. Cậu bé đã khiến tôi phì cười không ít lần. Dù hay gây ra rắc rối nhưng Zezé là một em bé theo
                    tôi là rất đáng yêu. Truyện đưa ta đến với những trò quậy phá, những vụn vặt ngày thường của cậu bé
                    nhưng không hề nhàm chán chút nào cả
                </div>
                <div className="like-report">
                    <div className="like">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <p>
                            thích <span>(2)</span>
                        </p>
                    </div>
                    <div className="report">
                        <FontAwesomeIcon icon={faWarning} />
                        <p>báo cáo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
