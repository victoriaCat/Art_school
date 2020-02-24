import './CarouselMyWorks.scss';

import React, {Component} from 'react';
import Carousel from '~/libs/Carousel/Carousel.jsx';


class CarouselMyWorks extends Component {
    render() {
        const carouselMyWorks = {
            className: '.carousel-my-works__photo',
            images: this.props.images,
        };
        return (
            <Carousel {...carouselMyWorks}/>
        );
    }
}

export default CarouselMyWorks;