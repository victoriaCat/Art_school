import './CarouselStudents.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from "react-router-dom";

import carouselStudents1Img from '~/assets/images/main-page/students/img-8574.jpeg';
import carouselStudents2Img from '~/assets/images/main-page/students/img-8577.jpeg';
import carouselStudents3Img from '~/assets/images/main-page/students/img-8589.jpeg';
import carouselStudents4Img from '~/assets/images/main-page/students/img-8590.jpeg';

class CarouselStudents extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: false,
            variableWidth: true
        };
        return (
            <Link to="/">
                <Slider {...settings}>
                    <div className="carousel-students__photo">
                        <img src={carouselStudents1Img} alt=""/>
                    </div>
                    <div className="carousel-students__photo">
                        <img src={carouselStudents2Img} alt=""/>
                    </div>
                    <div className="carousel-students__photo">
                        <img src={carouselStudents3Img} alt=""/>
                    </div>
                    <div className="carousel-students__photo">
                        <img src={carouselStudents4Img} alt=""/>
                    </div>
                </Slider>
            </Link>
        );
    }
}

export default CarouselStudents;