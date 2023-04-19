import { useState } from 'react';
import Loading from '../../../../components/Loading';

function Review() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Viết đánh giá</h5>
            </div>
            <div className="review">
                <div className="review-header">
                    <div className="time">Giao hàng vào ngày 04 tháng 04 năm 2023</div>
                    <div className="des">
                        Nhận xét và đánh giá sản phẩm đã mua (5 sao: Rất Tốt - 1 sao: Rất Tệ):
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
