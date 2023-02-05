import Categories from './Categories';
import SliderHome from './SliderHome';
import './mainhome.scss';
function MainHome() {
    return (
        <div className="home d-flex">
            <div className="container">
                <Categories />
                <SliderHome />
            </div>
        </div>
    );
}

export default MainHome;
