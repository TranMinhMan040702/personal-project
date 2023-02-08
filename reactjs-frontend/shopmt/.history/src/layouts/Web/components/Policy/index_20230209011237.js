import { faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './policy.scss';
function Policy() {
    return (
        <div className="policy background">
            <div className="container product">
                <div className="item">
                    <FontAwesomeIcon icon={faShop} />
                </div>
            </div>
        </div>
    );
}

export default Policy;
