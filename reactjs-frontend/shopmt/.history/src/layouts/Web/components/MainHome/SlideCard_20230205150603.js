import Sdata from './Sdata';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../../../../assets/images';
function SlideCard() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: '0px' }}>{dots}</ul>;
        },
    };
    return (
        <>
            <Slider {...settings}>
                {Sdata.map((value, index) => {
                    return (
                        <>
                            <div className="box d-flex top" key={index}>
                                <div className="left">
                                    <h1>{value.title}</h1>
                                    <p>{value.desc}</p>
                                    <button className="btn-primary">Visit Collections</button>
                                </div>
                                <div className="right">
                                    <img src={images.slide} alt="" />
                                </div>
                            </div>
                        </>
                    );
                })}
            </Slider>
        </>
    );
}

export default SlideCard;
