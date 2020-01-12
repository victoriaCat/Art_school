import './MainSlider.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';

import paintImg from '~/assets/images/main-page/slider-img-paint.png';
import brushesImg from '~/assets/images/main-page/slider-img-brushes.png';
import paintSecondImg from '~/assets/images/main-page/slider-img-paint-2.png';

class MainSlider extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear',
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <Slider {...settings}>
                <div className="welcome-block__slide">
                    <img src={paintImg} alt=""/>
                </div>
                <div className="welcome-block__slide">
                    <img src={brushesImg} alt=""/>
                </div>
                <div className="welcome-block__slide">
                    <img src={paintSecondImg} alt=""/>
                </div>
            </Slider>
        );
    }
}

export default MainSlider;