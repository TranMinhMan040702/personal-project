import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Location() {
    return (
        <div className="location">
            <div className="container product">
                <div className="header">
                    <FontAwesomeIcon icon={faLocation} />
                    <h4>Địa chỉ nhận hàng</h4>
                </div>
            </div>
        </div>
    );
}

export default Location;
