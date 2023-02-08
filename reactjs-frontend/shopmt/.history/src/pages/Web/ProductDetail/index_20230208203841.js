import images from '../../../assets/images';
function ProductDetail() {
    return (
        <div className="product-detail container">
            <div className="product-imgs">
                <div className="images-container">
                    <img src={images.p2} alt="" />
                </div>
                <div className="small-images-container"></div>
            </div>
            <div className="product-des">
                <div className="product-info">
                    <h4>Nhà giả kim</h4>
                    <p>
                        Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất
                        thơ,thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil
                        vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn
                        nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn,
                        trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời
                        người đọc.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
