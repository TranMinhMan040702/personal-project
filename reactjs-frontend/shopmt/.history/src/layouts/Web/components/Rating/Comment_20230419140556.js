import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faStar, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
function Comment({ reviews }) {
    const handleDate = (timeStamp) => {
        const dateFormat = new Date(timeStamp);
        return (
            dateFormat.getDate() +
            '/' +
            (dateFormat.getMonth() + 1) +
            '/' +
            dateFormat.getFullYear() +
            ' ' +
            dateFormat.getHours() +
            ':' +
            dateFormat.getMinutes() +
            ':' +
            dateFormat.getSeconds()
        );
    };
    return (
        <>
            {reviews.map((review, index) => {
                return (
                    <div key={index} className="comment d-flex justify-content-between">
                        <div className="comment-info d-flex flex-column justify-content-start align-items-center">
                            <h5>{review.user.firstname + ' ' + review.user.lastname}</h5>
                            <div className="image">
                                <img
                                    src={review.user.avatar ? review.user.avatar : images.noAvatar}
                                    alt=""
                                />
                            </div>
                            <p>{handleDate(review.createdAt)}</p>
                        </div>
                        <div className="comment-detail">
                            <div className="comment-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="comment-content">{review.content}</div>
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
