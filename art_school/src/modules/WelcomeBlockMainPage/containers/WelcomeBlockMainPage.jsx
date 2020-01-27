import './WelcomeBlockMainPage.scss';

import React, {Component} from 'react';
import MainSlider from '~/modules/WelcomeBlockMainPage/components/MainSlider/MainSlider.jsx';
import CarouselStudents from '~/modules/WelcomeBlockMainPage/components/CarouselStudents/CarouselStudents.jsx';
import CarouselWorks from '~/modules/WelcomeBlockMainPage/components/CarouselWorks/CarouselWorks.jsx';
import Advantages from '~/modules/WelcomeBlockMainPage/components/Advantages/Advantages.jsx';
import MainOption from '~/modules/WelcomeBlockMainPage/components/MainOption/MainOption.jsx';
import { fetchMainSliderImages } from '~/store/actions';
import {connect} from 'react-redux';

import optionAdultsImg from '~/assets/images/main-page/main-page-adults.png';
import optionKidsImg from '~/assets/images/main-page/main-page-kids.png';
import optionStudioImg from '~/assets/images/main-page/main-page-studio.png';
import optionWorkshopImg from '~/assets/images/main-page/main-page-workshop.png';

class WelcomeBlockMainPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const welcomeOptions = {
            optionAdults: {
                header: 'Рисуют взрослые',
                img: optionAdultsImg
            },
            optionKids: {
                header: 'Рисуют дети',
                img: optionKidsImg
            },
            optionWorkshop: {
                header: 'Мастер-классы',
                img: optionWorkshopImg
            },
            optionStudio: {
                header: 'Свободная мастерская',
                img: optionStudioImg
            },
        };
        return (
            <div className="welcome-block">
                <div className="welcome-block-container">
                    <MainSlider images={this.props.mainSliderImages}/>
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
                        <div className="flex-container-options">
                            <MainOption {...welcomeOptions.optionAdults}/>
                            <MainOption {...welcomeOptions.optionKids}/>
                        </div>
                        <div className="flex-container-options">
                            <MainOption {...welcomeOptions.optionWorkshop}/>
                            <MainOption {...welcomeOptions.optionStudio}/>
                        </div>
                    </div>
                    <h3>Работы Учеников</h3>
                </div>
                <CarouselStudents/>
                <CarouselWorks/>
            </div>
        );
    }
    componentDidMount() {
        this.props.fetchMainSliderImages();
    }
}

const loadData = (store) => {
    return store.dispatch(fetchMainSliderImages());
};

const mapStateToProps = state => ({
    mainSliderImages: state.mainSliderImages
});

const mapDispatchToProps = { fetchMainSliderImages };


export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(WelcomeBlockMainPage), loadData
};
