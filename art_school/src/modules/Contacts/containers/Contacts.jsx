import './Contacts.scss';
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import FeedbackForm from '~/modules/Contacts/components/FeedbackForm/FeedbackForm.jsx';
import {YMaps, Map, ZoomControl, Placemark} from "react-yandex-maps";
import pointerImg from '~/assets/images/pointer.png';
import metroImg from '~/assets/images/metro.png';
import phoneImg from '~/assets/images/phone.png';
import emailImg from '~/assets/images/email.png';
import {PHONE_NUMBER, EMAIL} from '~/assets/infoVars';
import MainSlider from "~/modules/WelcomeBlockMainPage/components/MainSlider/MainSlider.jsx";
import {fetchImages} from '~/libs/commonActions';
import {FETCH_MAIN_SLIDER_IMAGES} from '~/modules/WelcomeBlockMainPage/actionTypes';

class Contacts extends Component {
    render() {
        const yandexMapState = {center: [55.75011637742818, 37.624307386079835], zoom: 12, controls: []};
        return (
            <>
                <div className="contacts">
                    <div className="contacts-wrap">
                        <div className="contacts-mobile-slider">
                            <MainSlider images={this.props.mainSliderImages.payload}/>
                        </div>
                        <div className="contacts-group-container">
                            <div className="contacts-group">
                                <div className="contacts-main">
                                    <h4>АРТ-ШКОЛА ПУШКАРЁВОЙ</h4>
                                    <p>Площадки проведения мастерклассов:</p>
                                    <div className="contacts-icon">
                                        <img src={pointerImg} alt=""/>
                                    </div>
                                    <div className="contacts-kurskaya">
                                        <img src={metroImg} alt=""/>
                                        <span className="metro"> Курская</span>
                                        <p>Дом для творческих людей ОТ УМА</p>
                                        <p>г.Москва, Костомаровский пер. дом. 3, стр. 3</p>
                                    </div>
                                    <div className="contacts-icon">
                                        <img src={pointerImg} alt=""/>
                                    </div>
                                    <div className="contacts-dobryninskaya">
                                        <img src={metroImg} alt=""/>
                                        <span className="metro"> Добрынинская</span>
                                        <p>Антикафе-коворкинг Белый Лист</p>
                                        <p>г.Москва, Валовая ул. 32/75с1</p>
                                    </div>
                                    {/*<div className="contacts-phone">*/}
                                    {/*<img className="contacts-icon" src={phoneImg} alt="" width="50px"/>*/}
                                    {/*<p>{PHONE_NUMBER}</p>*/}
                                    {/*</div>*/}
                                    <div className="contacts-email">
                                        <img src={emailImg} alt=""/>
                                        <p>{EMAIL}</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="contacts-form">
                                    <p className="if-questions">Если у Вас есть вопросы или предложения,</p>
                                    <span className="write-to-us">напишите нам:</span>
                                    <FeedbackForm/>
                                    <p className="policy-agreement">Нажимая «Отправить» Вы соглашаетесь <br/> c<Link
                                        to="/policy" target="_blank"> Политикой
                                        конфиденциальности</Link></p>
                                </div>
                            </div>
                        </div>
                        <YMaps>
                            <Map state={yandexMapState} width="100%" height="320px">
                                <ZoomControl options={{float: 'right'}}/>
                                <Placemark geometry={[55.75238275487334, 37.66616910189715]}
                                           properties={{
                                               balloonContentHeader: 'Творческая студия От Ума',
                                               balloonContentBody: 'м. Курская, Костомаровский пер. д. 3, стр. 3'
                                           }}
                                           options={{preset: 'islands#brownSouvenirsIcon'}}
                                           modules={['geoObject.addon.balloon']}/>
                                <Placemark geometry={[55.73024518242224, 37.625879832669334]}
                                           properties={{
                                               balloonContentHeader: 'Коворкинг Белый Лист',
                                               balloonContentBody: 'м. Добрынинская, Валовая улица, 32/75с1'
                                           }}
                                           options={{preset: 'islands#brownBookIcon'}}
                                           modules={['geoObject.addon.balloon']}/>
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </>
        );
    }

    componentDidMount() {
        if (this.props.mainSliderImages.isLoading)
            this.props.fetchImages('main_slider', FETCH_MAIN_SLIDER_IMAGES);
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('main_slider', FETCH_MAIN_SLIDER_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    mainSliderImages: state.mainPageImages.mainSliderImages
});

const mapDispatchToProps = {fetchImages};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(Contacts), loadData
};
