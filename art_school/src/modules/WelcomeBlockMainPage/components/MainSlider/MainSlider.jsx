import './MainSlider.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';

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
                {this.props.images.map(image => (
                    <div key={image.id} className="welcome-block__slide">
                        <img src={image.url} alt=""/>
                    </div>))}
            </Slider>

        );
    }
}

export default MainSlider;