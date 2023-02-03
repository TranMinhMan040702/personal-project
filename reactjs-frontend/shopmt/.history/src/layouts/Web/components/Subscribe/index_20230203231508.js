import './subscribe.scss';
function Subscribe() {
    return (
        <div className="subscribe-section bg-with-black">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="subscribe-head">
                            <h2>Do you need more information</h2>
                            <p>Sign up free and get the latest information</p>
                            <form className="form-section">
                                <input type="email" placeholder="Your Email..." name="email" />
                                <input type="submit" name="subscribe" value="Yes. I want !" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
