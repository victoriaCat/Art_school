import './CarouselWorks.scss';

import React, {Component} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import carouselWorks1Img from '~/assets/images/main-page/students/11-07-19-04-57-1.png';
import carouselWorks2Img from '~/assets/images/main-page/students/11-07-19-04-57-2 .png';
import carouselWorks3Img from '~/assets/images/main-page/students/11-07-19-04-57-3.png';
import carouselWorks4Img from '~/assets/images/main-page/students/11-07-19-04-57-4.png';

class CarouselWorks extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            rtl: true,
            arrows: false,
            variableWidth: true
        };
        return (
            <Link to="/">
                <Slider {...settings}>
                    <div className="carousel-works__photo">
                        <img src={carouselWorks1Img} alt=""/>
                    </div>
                    <div className="carousel-works__photo">
                        <img src={carouselWorks2Img} alt=""/>
                    </div>
                    <div className="carousel-works__photo">
                        <img src={carouselWorks3Img} alt=""/>
                    </div>
                    <div className="carousel-works__photo">
                        <img src={carouselWorks4Img} alt=""/>
                    </div>
                </Slider>
            </Link>
        );
    }
}

export default CarouselWorks;