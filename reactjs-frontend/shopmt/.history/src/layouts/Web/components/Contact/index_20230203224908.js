import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.scss';
function Contact() {
    return (
        <div className="contact-infor container">
            <div className="row">
                <div className="col-md-4 contact-box">
                    <div className="box-info">
                        <div className="info-image">
                            <FontAwesomeIcon className="icon" icon={faPhone} />
                        </div>
                        <h5>Call Us 24x7</h5>
                        <p>0964294799</p>
                    </div>
                </div>
                <div className="col-md-4 contact-box">
                    <div className="box-info">
                        <div className="info-image">
                            <FontAwesomeIcon className="icon" icon={faPhone} />
                        </div>
                        <h5>Call Us 24x7</h5>
                        <p>0964294799</p>
                    </div>
                </div>
                <div className="col-md-4 contact-box">
                    <div className="box-info">
                        <div className="info-image">
                            <FontAwesomeIcon className="icon" icon={faPhone} />
                        </div>
                        <h5>Call Us 24x7</h5>
                        <p>0964294799</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
