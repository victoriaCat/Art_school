import React, {Component} from 'react';
import Slider from 'react-slick';

import './MainSlider.scss';
import {FS_IMG_URL} from '~/libs/api';

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
            arrows: false,
            lazyLoad: true
        };

        return (
            <Slider {...settings}>
                {this.props.images.map(image => (
                    <div key={image.id} className="welcome-block__slide">
                        <img
                          src={`${FS_IMG_URL}${image.id}/${image.name}?`}
                          alt={image.name}
                        />
                    </div>))}
            </Slider>

        );
    }
}

export default MainSlider;
