import Categories from './Categories';
import SliderHome from './SliderHome';
import './mainhome.scss';
function MainHome() {
    return (
        <div className="home">
            <div className="container">
                <Categories />
                <SliderHome />
            </div>
        </div>
    );
}

export default MainHome;
