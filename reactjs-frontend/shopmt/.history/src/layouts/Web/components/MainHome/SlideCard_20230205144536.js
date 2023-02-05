import Sdata from './Sdata';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SlideCard() {
    return (
        <>
            <Slider {...settings}>
                {Sdata.map((value, index) => {
                    return (
                        <>
                            <div className="box d_flex top" key={index}>
                                <div className="left">
                                    <h1>{value.title}</h1>
                                    <p>{value.desc}</p>
                                    <button className="btn-primary">Visit Collections</button>
                                </div>
                                <div className="right">
                                    <img src={value.cover} alt="" />
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
