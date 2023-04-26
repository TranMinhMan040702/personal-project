import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import { useState } from 'react';

function Verify() {
    const [code, setCode] = useState();

    const hanldeLength = (e) => {
        console.log(e);
        if (e.target.value > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
    };
    const handleChange = (e) => {
        setCode(e.target.value);
    };

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
                        style={{ fontSize: '25px' }}
                        type="number"
                        placeholder="Nhập mã Code . . ."
                        name="code-verify"
                        maxLength="6"
                        onInput={(e) => hanldeLength(e)}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button style={{ width: '160px' }}>Xác nhận</button>
                    <button style={{ width: '160px', backgroundColor: '#0f3460' }}>Hủy</button>
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
