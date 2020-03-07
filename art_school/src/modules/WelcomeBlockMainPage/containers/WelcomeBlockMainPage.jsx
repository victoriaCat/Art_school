import './WelcomeBlockMainPage.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import MainSlider from '~/modules/WelcomeBlockMainPage/components/MainSlider/MainSlider.jsx';
import Advantages from '~/modules/WelcomeBlockMainPage/components/Advantages/Advantages.jsx';
import MainOption from '~/modules/WelcomeBlockMainPage/components/MainOption/MainOption.jsx';
import CarouselStudents from '~/modules/WelcomeBlockMainPage/components/CarouselStudents/CarouselStudents.jsx';
import CarouselWorks from '~/modules/WelcomeBlockMainPage/components/CarouselWorks/CarouselWorks.jsx';
import {fetchImages} from '~/libs/commonActions';
import {
    FETCH_MAIN_SLIDER_IMAGES,
    FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS,
    FETCH_MAIN_CAROUSEL_IMAGES_WORKS,
    FETCH_MAIN_OPTIONS_IMAGES
} from '~/modules/WelcomeBlockMainPage/actionTypes';

class WelcomeBlockMainPage extends Component {
    /*
    * returns {Preloader || MainSlider || CarouselStudents || CarouselWorks}
    * */
    showMainPageImages(allProps) {
        let {isLoading, payload = []} = allProps;
        switch (allProps) {
            case this.props.mainSliderImages :
                return isLoading ? <Preloader/> : <MainSlider images={payload}/>;
            case this.props.carouselStudentsImages:
                return isLoading ? <Preloader/> : <CarouselStudents images={payload}/>;
            case this.props.carouselWorksImages :
                return isLoading ? <Preloader/> : <CarouselWorks images={payload}/>;
            default :
                return <Preloader/>;
        }
    }

    /*
    * returns {Preloader || MainOption}
    * */
    showMainOptionsImages(allProps, option){
        let {isLoading, payload = []} = allProps;
        let {} = option;
        if(allProps === this.props.mainOptionsImages){
            let index = allProps.payload.findIndex(image => image.name === option.imgName);
            return isLoading ? <Preloader/> : <MainOption image={payload[index]} option={option}/>;
        }
        else return <Preloader/>;
    }

    render() {
        const welcomeOptions = {
            optionAdults: {
                header: 'Рисуют взрослые',
                imgName: 'main-page-adults.png',
                link: '/adults_draw'
            },
            optionKids: {
                header: 'Рисуют дети',
                imgName: 'main-page-kids.png',
                link: '/kids_draw'
            },
            optionWorkshop: {
                header: 'Мастер-классы',
                imgName: 'main-page-workshop.png',
                link: '/workshops'
            },
            optionStudio: {
                header: 'Свободная мастерская',
                imgName: 'main-page-studio.png',
                link: '/free_studio'
            }
        };
        return (
            <div className="welcome-block">
                <div className="welcome-block-container">
                    {this.showMainPageImages(this.props.mainSliderImages)}
                    <div className="flex-container-welcome">
                        <div className="under-slider-text">
                            Искусство обладает силой, способной освободить от дурных мыслей,
                            избавить от беспокойства. Помогает расслабиться и стать лучше.
                            Более счастливым, более полно чувствующим жизнь.
                        </div>
                        <button className="main-sign-up-button">
                            <Link to="/workshops">ЗАПИСАТЬСЯ</Link>
                        </button>
                    </div>
                    <Advantages/>
                    <div className="welcome-block-options" id="options">
                        <div className="flex-container-options">
                            {this.showMainOptionsImages(this.props.mainOptionsImages, welcomeOptions.optionAdults)}
                            {this.showMainOptionsImages(this.props.mainOptionsImages, welcomeOptions.optionKids)}
                        </div>
                        <div className="flex-container-options">
                            {this.showMainOptionsImages(this.props.mainOptionsImages, welcomeOptions.optionWorkshop)}
                            {this.showMainOptionsImages(this.props.mainOptionsImages, welcomeOptions.optionStudio)}
                        </div>
                    </div>
                </div>
                <div className="welcome-block-carousel-wrapper">
                    <h3>Работы Учеников</h3>
                    {this.showMainPageImages(this.props.carouselStudentsImages)}
                    {this.showMainPageImages(this.props.carouselWorksImages)}
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.mainSliderImages.isLoading)
            this.props.fetchImages('main_slider', FETCH_MAIN_SLIDER_IMAGES);
        if (this.props.carouselStudentsImages.isLoading)
            this.props.fetchImages('main_carousel_students', FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS);
        if (this.props.carouselWorksImages.isLoading)
            this.props.fetchImages('main_carousel_works', FETCH_MAIN_CAROUSEL_IMAGES_WORKS);
        if (this.props.mainOptionsImages.isLoading)
            this.props.fetchImages('main_options', FETCH_MAIN_OPTIONS_IMAGES);
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('main_slider', FETCH_MAIN_SLIDER_IMAGES)),
        store.dispatch(fetchImages('main_carousel_students', FETCH_MAIN_CAROUSEL_IMAGES_STUDENTS)),
        store.dispatch(fetchImages('main_carousel_works', FETCH_MAIN_CAROUSEL_IMAGES_WORKS)),
        store.dispatch(fetchImages('main_options', FETCH_MAIN_OPTIONS_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    mainSliderImages: state.mainPageImages.mainSliderImages,
    carouselStudentsImages: state.mainPageImages.carouselStudentsImages,
    carouselWorksImages: state.mainPageImages.carouselWorksImages,
    mainOptionsImages: state.mainPageImages.mainOptionsImages
});

const mapDispatchToProps = {fetchImages};

WelcomeBlockMainPage.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    mainSliderImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired,
    carouselStudentsImages: PropTypes.object.isRequired,
    carouselWorksImages: PropTypes.object.isRequired,
    mainOptionsImages : PropTypes.object.isRequired,
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(WelcomeBlockMainPage), loadData
};