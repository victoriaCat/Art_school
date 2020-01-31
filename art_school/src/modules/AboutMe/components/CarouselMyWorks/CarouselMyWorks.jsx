import './CarouselMyWorks.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from "react-router-dom";

class CarouselMyWorks extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true
        };
        return (
            <Link to="/">
                <Slider {...settings}>
                    <div className="carousel-my-works__photo">
                        <img src={carouselMyWorks1Img} alt=""/>
                    </div>
                    <div className="carousel-my-works__photo">
                        <img src={carouselMyWorks2Img} alt=""/>
                    </div>
                    <div className="carousel-my-works__photo">
                        <img src={carouselMyWorks3Img} alt=""/>
                    </div>
                </Slider>
            </Link>
        );
    }
}

export default CarouselMyWorks;