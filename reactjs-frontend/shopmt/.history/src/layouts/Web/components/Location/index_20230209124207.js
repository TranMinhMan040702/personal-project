import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Location() {
    return (
        <div className="container product">
            <div className="header">
                <FontAwesomeIcon icon={faLocation} />
            </div>
        </div>
    );
}

export default Location;
