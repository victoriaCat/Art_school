import './CarouselMyWorks.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';
import {FS_IMG_URL} from '~/libs/api';

class CarouselMyWorks extends Component {
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

        return (
            <Slider {...settings}>
                {this.props.images.map(image => (
                    <div key={image.id} className='carousel-my-works__photo'>
                        <a href={`${FS_IMG_URL}${image.id}/${image.name}?`} target="_blank">
                            <img src={`${FS_IMG_URL}${image.id}/${image.name}?`} alt={image.name}/>
                        </a>
                    </div>))}
            </Slider>
        );
    }
}

export default CarouselMyWorks;