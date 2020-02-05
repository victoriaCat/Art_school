import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './WelcomeBlockMainPage.scss';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import MainSlider from '~/modules/WelcomeBlockMainPage/components/MainSlider/MainSlider.jsx';
import Advantages from '~/modules/WelcomeBlockMainPage/components/Advantages/Advantages.jsx';
import MainOption from '~/modules/WelcomeBlockMainPage/components/MainOption/MainOption.jsx';
import CarouselStudents from "~/modules/WelcomeBlockMainPage/components/CarouselStudents/CarouselStudents.jsx";
import CarouselWorks from "~/modules/WelcomeBlockMainPage/components/CarouselWorks/CarouselWorks.jsx";

import {
    fetchMainSliderImages,
    fetchMainCarouselStudentsImages,
    fetchMainCarouselWorksImages
} from '~/modules/WelcomeBlockMainPage/actions';

class WelcomeBlockMainPage extends Component {
    /*
    * returns {Preloader || MainSlider}
    * */
    getMainSliderElement() {
        const {isLoading, payload = []} = this.props.mainSliderImages;

        return isLoading ? <Preloader/> : <MainSlider images={payload}/>;
    }

    /*
    * returns {Preloader || CarouselStudents}
    * */
    getCarouselStudentsElement() {
        const {isLoading, payload = []} = this.props.carouselStudentsImages;

        return isLoading ? <Preloader/> : <CarouselStudents images={payload}/>;
    }

    /*
    * returns {Preloader || CarouselWorks}
    * */
    getCarouselWorksElement() {
        const {isLoading, payload = []} = this.props.carouselWorksImages;

        return isLoading ? <Preloader/> : <CarouselWorks images={payload}/>;
    }

    render() {
        // const welcomeOptions = {
        //     optionAdults: {
        //         header: 'Рисуют взрослые',
        //         img: optionAdultsImg
        //     },
        //     optionKids: {
        //         header: 'Рисуют дети',
        //         img: optionKidsImg
        //     },
        //     optionWorkshop: {
        //         header: 'Мастер-классы',
        //         img: optionWorkshopImg
        //     },
        //     optionStudio: {
        //         header: 'Свободная мастерская',
        //         img: optionStudioImg
        //     },
        // };

        return (
            <div className="welcome-block">
                <div className="welcome-block-container">
                    {this.getMainSliderElement()}
                    <div className="flex-container-welcome">
                        <div className="under-slider-text">
                            Искусство обладает силой, способной освободить от дурных мыслей,
                            избавить от беспокойства. Помогает расслабиться и стать лучше.
                            Более счастливым, более полно чувствующим жизнь.
                        </div>
                        <button className="main-sign-up-button">
                            ЗАПИСАТЬСЯ
                        </button>
                    </div>
                    <Advantages/>
                    <div className="welcome-block-options">
                        {/*<div className="flex-container-options">*/}
                        {/*<MainOption {...welcomeOptions.optionAdults}/>*/}
                        {/*<MainOption {...welcomeOptions.optionKids}/>*/}
                        {/*</div>*/}
                        {/*<div className="flex-container-options">*/}
                        {/*<MainOption {...welcomeOptions.optionWorkshop}/>*/}
                        {/*<MainOption {...welcomeOptions.optionStudio}/>*/}
                        {/*</div>*/}
                    </div>
                    <h3>Работы Учеников</h3>
                    {this.getCarouselStudentsElement()}
                    {this.getCarouselWorksElement()}
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.mainSliderImages) this.props.fetchMainSliderImages();
        if (!this.props.carouselStudentsImages) this.props.fetchMainCarouselStudentsImages();
        if (!this.props.carouselWorksImages) this.props.fetchMainCarouselWorksImages();
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchMainSliderImages()),
        store.dispatch(fetchMainCarouselStudentsImages()),
        store.dispatch(fetchMainCarouselWorksImages())
    ]);
};

const mapStateToProps = state => ({
    mainSliderImages: state.mainPageImages.mainSliderImages,
    carouselStudentsImages: state.mainPageImages.carouselStudentsImages,
    carouselWorksImages: state.mainPageImages.carouselWorksImages
});

const mapDispatchToProps = {fetchMainSliderImages, fetchMainCarouselStudentsImages, fetchMainCarouselWorksImages};

/*
* https://ru.react.js.org/docs/typechecking-with-proptypes.html
* */
WelcomeBlockMainPage.propTypes = {
    fetchMainSliderImages: PropTypes.func.isRequired,
    fetchMainCarouselStudentsImages: PropTypes.func.isRequired,
    fetchMainCarouselWorksImages: PropTypes.func.isRequired,
    mainSliderImages: PropTypes.shape({
        // Состояние загрузки
        isLoading: PropTypes.bool.isRequired,
        // Коллекция
        payload: PropTypes.array,
    }).isRequired,
    carouselStudentsImages: PropTypes.object.isRequired,
    carouselWorksImages: PropTypes.object.isRequired,
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(WelcomeBlockMainPage), loadData
};
