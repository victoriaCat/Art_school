import './Carousel.scss';
import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {FS_IMG_URL} from '~/libs/api';

class Carousel extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true
        };

        if (this.props.propsSettings) {
            Object.assign(settings, this.props.propsSettings);
        }
        return (
            <Slider {...settings}>
                {this.props.images.map(image => (
                    <div key={image.id} className={this.props.className}>
                        <img src={`${FS_IMG_URL}${image.id}/${image.name}?`} alt={image.name}/>
                    </div>))}
            </Slider>
        );
    }
}

export default Carousel;