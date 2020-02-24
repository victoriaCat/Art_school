import './CarouselStudents.scss';

import React, {Component} from 'react';
import Carousel from '~/libs/Carousel/Carousel.jsx';

class CarouselStudents extends Component {
    render() {
        const carouselStudents = {
            className: 'carousel-students__photo',
            images: this.props.images,
        };
        return (
            <Carousel {...carouselStudents}/>
        );
    }
}

export default CarouselStudents;