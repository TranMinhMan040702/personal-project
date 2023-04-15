import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../../assets/images';
import { faCartPlus, faHeartCrack } from '@fortawesome/free-solid-svg-icons';

function ProductLike() {
    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Sản phẩm yêu thích của tôi</h5>
            </div>
            <div className="product-like-list">
                <div className="cart-details d-flex align-items-center justify-content-between my-3">
                    <div
                        className="infor d-flex align-items-center justify-content-start"
                        style={{ width: '70%' }}
                    >
                        <div className="cart-image d-flex" style={{ width: '20%' }}>
                            <img className="img-thumbnail" src={images.products.p1} alt="product" />
                        </div>
                        <div className="name-des">
                            <h4>Nhà giả kim</h4>
                            <p>
                                Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và
                                miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông
                                Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực
                                Singapore, Malaysia, Indonesia, Thái Lan, Philippines, Đài Loan,
                                Brazil, México & Colombia. Với sự đảm bảo của Shopee, bạn sẽ mua
                                hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
                            </p>
                        </div>
                    </div>
                    <div className="flex-column d-flex justify-content-center align-items-center">
                        <span className="btn">
                            <FontAwesomeIcon icon={faHeartCrack} />
                        </span>
                        <span className="btn">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLike;
