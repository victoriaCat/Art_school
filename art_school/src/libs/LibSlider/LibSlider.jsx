import './LibSlider.scss';
import React, {Component} from 'react';
import Slider from 'react-slick';
import {FS_IMG_URL} from '~/libs/api';

class LibSlider extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 3500,
            infinite: true,
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear',
            slidesToScroll: 1,
            arrows: false,
            pauseOnHover: false
        };

        if (this.props.propsSettings) {
            Object.assign(settings, this.props.propsSettings);
        }
        return (
            <Slider {...settings}>
                {this.props.images.map(image => (
                    <div key={image.id} className={this.props.className}>
                        <img
                            src={`${FS_IMG_URL}${image.id}/${image.name}?`}
                            alt={image.name}
                        />
                    </div>))}
            </Slider>

        );
    }
}

export default LibSlider;
