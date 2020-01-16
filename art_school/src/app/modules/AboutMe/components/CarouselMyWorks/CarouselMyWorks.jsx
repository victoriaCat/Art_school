import './CarouselMyWorks.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from "react-router-dom";

import carouselMyWorks1Img from '~/app/assets/images/about_me/carousel/diploma.png';
import carouselMyWorks2Img from '~/app/assets/images/about_me/carousel/lebyazhensky-krutoyar.png';
import carouselMyWorks3Img from '~/app/assets/images/about_me/carousel/lebyazhyi-yar.png';

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