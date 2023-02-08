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
            <div className="product-des"></div>
        </div>
    );
}

export default ProductDetail;
