import './CarouselKids.scss';

import React, {Component} from 'react';
import Carousel from '~/libs/Carousel/Carousel.jsx';

class CarouselKids extends Component {
    render() {
        const carouselKids = {
            className: 'carousel-kids__photo',
            images: this.props.images,
        };
        return (
            <Carousel {...carouselKids}/>
        );
    }
}
export default CarouselKids;