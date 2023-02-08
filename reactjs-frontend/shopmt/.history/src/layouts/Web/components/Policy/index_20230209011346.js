import { faStore } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './policy.scss';
function Policy() {
    return (
        <div className="policy background">
            <div className="container product">
                <div className="item">
                    <FontAwesomeIcon icon={faStore} />
                    <h3>Chính sách khách sỉ</h3>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faStore} />
                    <h3>Chính sách khách sỉ</h3>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faStore} />
                    <h3>Chính sách khách sỉ</h3>
                </div>
            </div>
        </div>
    );
}

export default Policy;
