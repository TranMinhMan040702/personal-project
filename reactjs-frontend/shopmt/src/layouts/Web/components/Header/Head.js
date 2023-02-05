import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
function Head() {
    return (
        <div className="head">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center display-none">
                        <p>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>0964294799</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMailBulk} />
                            <span>mantm040702@gmail.com</span>
                        </p>
                    </div>
                    <ul className="col-lg-6 d-flex justify-content-lg-end align-items-center">
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Head;
