import React, {Component} from 'react';
import Slider from 'react-slick';

import './MainSlider.scss';

class MainSlider extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear',
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: true,
        };

        return (
            <Slider {...settings}>
                {this.props.images.map(({id, url, title}) => (
                    <div
                      key={id}
                      className="welcome-block__slide"
                    >
                        <img
                          src={url}
                          alt={title}
                        />
                    </div>))}
            </Slider>

        );
    }
}

export default MainSlider;
