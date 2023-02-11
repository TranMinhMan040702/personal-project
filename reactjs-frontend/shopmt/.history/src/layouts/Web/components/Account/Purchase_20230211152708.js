import { Link } from 'react-router-dom';
function Purchase() {
    return (
        <div className="purchase">
            <div className="nav-purchase wapper mb-3">
                <ul className="d-flex justify-content-between align-items-center">
                    <li className="active">
                        <Link>Tất cả</Link>
                    </li>
                    <li>
                        <Link>Chờ thanh toán</Link>
                    </li>
                    <li>
                        <Link>Vận chuyển</Link>
                    </li>
                    <li>
                        <Link>Đang giao</Link>
                    </li>
                    <li>
                        <Link>Hoàn thành</Link>
                    </li>
                    <li>
                        <Link>Đã hủy</Link>
                    </li>
                </ul>
            </div>
            <div className="wapper"></div>
        </div>
    );
}

export default Purchase;
