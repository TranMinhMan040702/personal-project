import { Link } from 'react-router-dom';
function Purchase() {
    return (
        <div className="nav wapper">
            <ul className="d-flex justify-content-between align-items-center">
                <li>
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
    );
}

export default Purchase;
