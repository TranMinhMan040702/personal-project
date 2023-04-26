import { Link } from 'react-router-dom';
import images from '../../../../assets/images';

function Verify() {
    return (
        <div className="wapper">
            <header className="d-flex justify-content-between align-items-center">
                <h4>Nhập mã xác nhận</h4>
                <div className="img">
                    <img src={images.logoweb} alt="" />
                </div>
            </header>
            <form>
                <div className="d-flex flex-column mb-3">
                    <input
                        // onChange={(e) => handleChange(e)}
                        type="number"
                        placeholder="Nhập mã Code . . ."
                        name="code-verify"
                        // value={code}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button style={{ width: '160px' }}>Xác nhận</button>
                    <button style={{ width: '160px' }}>Xác nhận</button>
                </div>
            </form>
            <footer className="text-center">
                <h6>Bằng việc đăng kí, bạn đã đồng ý với ShopMT về</h6>
                <Link>Điều khoản dịch vụ</Link>&<Link>Chính sách bảo mật</Link>
            </footer>
        </div>
    );
}

export default Verify;
