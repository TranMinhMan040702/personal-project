import images from '../../../../assets/images';
import './footer.scss';
function Footer() {
    return (
        <footer className="footer">
            <div className="justify-content-center d-flex">
                <div className="card-name">
                    <img src={images.card.master} alt="mastercard" />
                </div>
                <div className="card-name">
                    <img src={images.card.visa} alt="visa" />
                </div>
                <div className="card-name">
                    <img src={images.card.paypal} alt="paypal" />
                </div>
                <div className="card-name">
                    <img src={images.card.american_express} alt="american_express" />
                </div>
                <div className="card-name">
                    <img src={images.card.discover} alt="discover" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
