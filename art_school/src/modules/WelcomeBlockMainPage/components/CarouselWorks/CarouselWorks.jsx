import './CarouselWorks.scss';

import React, {Component} from 'react';
import Carousel from '~/libs/Carousel/Carousel.jsx';

class CarouselWorks extends Component {
    render() {
        const carouselWorks = {
            className: 'carousel-works__photo',
            images: this.props.images,
            propsSettings: {
                rtl: true,
            }
        };
        return (
            <Carousel {...carouselWorks}/>
        );
    }
}

export default CarouselWorks;