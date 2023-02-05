import images from '../../../../assets/images';
function ImageAdv() {
    return (
        <div className="adv">
            <div className="adv-img">
                <img src={images.adv.qc1} alt="" />
            </div>
            <div className="adv-img">
                <img src={images.adv.qc2} alt="" />
            </div>
            <div className="adv-img">
                <img src={images.adv.qc3} alt="" />
            </div>
        </div>
    );
}

export default ImageAdv;
