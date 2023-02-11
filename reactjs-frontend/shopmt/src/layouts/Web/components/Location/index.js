import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './location.scss';
function Location() {
    return (
        <div className="location background">
            <div className="container ">
                <div className="top"></div>
                <div className="product">
                    <div className="header d-flex align-items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h4>Địa chỉ nhận hàng</h4>
                    </div>
                    <div className="address">
                        <span>Trần Minh Mẫn 0964294799</span>
                        ktx khu b đại học quốc gia, Phường Linh Trung, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                        <Link>Thay đổi</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
