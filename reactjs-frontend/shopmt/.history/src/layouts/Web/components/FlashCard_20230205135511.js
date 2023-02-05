import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </button>
        </div>
    );
};

function FlashCard() {
    return <h2>flash Card</h2>;
}

export default FlashCard;
