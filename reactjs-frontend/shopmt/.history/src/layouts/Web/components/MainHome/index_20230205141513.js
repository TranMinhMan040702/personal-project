import Categories from './Categories';
import SliderHome from './SliderHome';
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
