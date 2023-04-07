import MainHome from '../../../layouts/Web/components/MainHome';
import Shop from '../../../layouts/Web/components/Shop';
import Subscribe from '../../../layouts/Web/components/Subscribe';
import Contact from '../../../layouts/Web/components/Contact';
function Home() {
    return (
        <>
            {/* <FlashCard /> */}
            <MainHome />
            <Shop />
            <Subscribe />
            <Contact />
        </>
    );
}

export default Home;
