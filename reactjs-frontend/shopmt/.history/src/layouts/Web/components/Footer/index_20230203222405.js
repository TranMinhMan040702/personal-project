import images from '../../../../assets/images';
import './footer.scss';
function Footer() {
    return (
        <div className="footer">
            <div className="justify-content-center d-flex">
                <div className="card-name">
                    <img src={images.card.master} alt="" />
                </div>
                <div className="card-name">
                    <img src={images.card.visa} alt="" />
                </div>
                <div className="card-name">
                    <img src={images.card.paypal} alt="" />
                </div>
                <div className="card-name">
                    <img src={images.card.american_express} alt="" />
                </div>
                <div className="card-name">
                    <img src={images.card.discover} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
