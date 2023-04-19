import { useState } from 'react';
import Loading from '../../../../components/Loading';

function Review() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="reivew">
            <div className="wapper">
                <div className="header d-flex justify-content-between align-items-center">
                    <h5>Sản phẩm yêu thích của tôi</h5>
                </div>
                <div className="product-like-list"></div>
            </div>
        </div>
    );
}

export default Review;
