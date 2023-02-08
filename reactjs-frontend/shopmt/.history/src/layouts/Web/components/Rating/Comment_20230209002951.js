import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Comment() {
    return (
        <div className="comment">
            <div className="comment-info">
                <h3>Trần Mẫn</h3>
                <p>09/02/2023</p>
            </div>
            <div className="comment-content">
                <div className="content-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
    );
}

export default Comment;
