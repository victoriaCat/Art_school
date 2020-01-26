import './MainSlider.scss';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMainSliderImages } from '~/store/actions';
import Slider from 'react-slick';

class MainSlider extends Component {
    render() {
        const settings = {
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            slidesToShow: 1,
            fade: true,
            cssEase: 'linear',
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <Slider {...settings}>
                {this.props.mainSliderImages.map(image => (
                    <div key={image.id} className="welcome-block__slide">
                        <img src={image.url} alt=""/>
                    </div>))}
            </Slider>

    );
    }
    componentDidMount() {
       fetchMainSliderImages();
    }

    // componentWillUnmount() {
    //     // очищаем контейнер при любом выходе из компонента.
    //     this.props.dispatch();
    // }
}

const loadData = (store,param) =>{
    return store.dispatch(fetchMainSliderImages(param))
};

const mapStateToProps = state =>({
    mainSliderImages: state.mainSliderImages
});

const mapDispatchToProps = { fetchMainSliderImages };

export default { component: connect(
    mapStateToProps,
    mapDispatchToProps
    )(MainSlider), loadData };