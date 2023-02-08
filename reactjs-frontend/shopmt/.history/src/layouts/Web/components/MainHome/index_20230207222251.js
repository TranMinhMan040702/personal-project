import ImageAdv from './ImageAdv';
import SliderHome from './SliderHome';
import './mainhome.scss';
function MainHome() {
    return (
        <div className="home">
            <div className="container d-flex justify-content-between">
                <ImageAdv />
                <SliderHome />
            </div>
        </div>
    );
}

export default MainHome;
