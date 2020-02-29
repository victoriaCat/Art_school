import './CarouselAdults.scss';

import React, {Component} from 'react';
import Carousel from '~/libs/Carousel/Carousel.jsx';

class CarouselAdults extends Component {
    render() {
        const carouselAdults = {
            className: 'carousel-adults__photo',
            images: this.props.images,
        };
        return (
            <Carousel {...carouselAdults}/>
        );
    }
}
export default CarouselAdults;