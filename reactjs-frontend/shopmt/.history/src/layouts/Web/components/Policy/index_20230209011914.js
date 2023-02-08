import { faArrowRightArrowLeft, faStore, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './policy.scss';
function Policy() {
    return (
        <div className="policy background">
            <div className="container product d-flex align-items-center justify-content-between">
                <div className="item d-flex  justify-content-between">
                    <FontAwesomeIcon icon={faStore} />
                    <h3>Chính sách khách sỉ</h3>
                </div>
                <div className="item d-flex  justify-content-between">
                    <FontAwesomeIcon icon={faTruck} />
                    <h3>Thời gian giao hàng</h3>
                </div>
                <div className="item d-flex  justify-content-between">
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    <h3>Chính sách đổi trả</h3>
                </div>
            </div>
        </div>
    );
}

export default Policy;
