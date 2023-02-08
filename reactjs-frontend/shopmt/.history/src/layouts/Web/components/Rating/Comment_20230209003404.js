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
                <div className="comment-content"></div>
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
