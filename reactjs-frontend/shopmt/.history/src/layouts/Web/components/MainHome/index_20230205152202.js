import Categories from './Categories';
import SliderHome from './SliderHome';
import './mainhome.scss';
function MainHome() {
    return (
        <div className="home">
            <div className="container d-flex justify-content-between">
                <Categories />
                <SliderHome />
            </div>
        </div>
    );
}

export default MainHome;
