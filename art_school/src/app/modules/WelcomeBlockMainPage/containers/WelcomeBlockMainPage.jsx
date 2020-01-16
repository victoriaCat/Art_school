import './WelcomeBlockMainPage.scss';

import React, {Component} from 'react';
import Slider from '~/app/modules/WelcomeBlockMainPage/components/MainSlider/MainSlider.jsx';
import CarouselStudents from '~/app/modules/WelcomeBlockMainPage/components/CarouselStudents/CarouselStudents.jsx';
import CarouselWorks from '~/app/modules/WelcomeBlockMainPage/components/CarouselWorks/CarouselWorks.jsx';
import Advantages from '~/app/modules/WelcomeBlockMainPage/components/Advantages/Advantages.jsx';
import MainOption from '~/app/modules/WelcomeBlockMainPage/components/MainOption/MainOption.jsx';

import optionAdultsImg from '~/app/assets/images/main-page/main-page-adults.png';
import optionKidsImg from '~/app/assets/images/main-page/main-page-kids.png';
import optionStudioImg from '~/app/assets/images/main-page/main-page-studio.png';
import optionWorkshopImg from '~/app/assets/images/main-page/main-page-workshop.png';

class WelcomeBlockMainPage extends Component {
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
                    <Slider/>
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
}

export default WelcomeBlockMainPage;
