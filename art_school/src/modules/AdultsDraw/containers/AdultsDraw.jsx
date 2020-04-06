import './AdultsDraw.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import CarouselAdults from '~/modules/AdultsDraw/components/CarouselAdults.jsx';
import {fetchImages} from '~/libs/commonActions';
import {FETCH_CAROUSEL_ADULTS_DRAW_IMAGES} from '~/modules/AdultsDraw/actionTypes';
import {connect} from "react-redux";
import {PRICE, DURATION} from '~/assets/infoVars';
import {Link} from "react-router-dom";
import WorkshopsAdults from "~/modules/WorkshopsCatalog/containers/WorkshopsAdults/WorkshopsAdults.jsx";
import Header from "~/modules/Header/containers/Header.jsx";

class AdultsDraw extends Component {
    /*
    * returns {Preloader || CarouselAdults}
    * */
    showAdultsDrawCarousel(allProps) {
        let {isLoading, payload = []} = allProps;
        if (allProps === this.props.adultsDrawImages)
            return isLoading ? <Preloader/> : <CarouselAdults images={payload}/>;
        else
            return <Preloader/>;
    }

    render() {
        return (
            <div className="adults-draw">
                <Header/>
                <h2>Рисуют взрослые</h2>
                <Link to="/gallery"> {this.showAdultsDrawCarousel(this.props.adultsDrawImages)} </Link>
                <p>В <span className="school">Школу рисования Екатерины Пушкарёвой</span> приходят люди всех возрастов. Здесь каждому помогают раскрыть
                    свой творческий потенциал и начать создавать нечто удивительное.</p>
                <h3>ДЛЯ КОГО МАСТЕРСКАЯ?</h3>
                <ul>
                    <li>Для тех, кто хочет получить в меру умный отдых и открыть для себя нечто новое</li>
                    <li>Для тех, кто хочет интересно провести время, порадоваться ярким краскам, и, в итоге, получить
                        картину, которая будет дорога сердцу
                    </li>
                    <li> Для тех, кто хочет сделать уникальный подарок своим близким людям или себе - авторскую
                        картину
                    </li>
                </ul>
                <p>Не бойтесь быть дебютантом. Главное – непрерывно учиться по жизни.
                    В каждом из нас живёт художник, который постоянно ищет повод, чтобы выразить себя. </p>
                <p>Продолжительность: {DURATION} часа</p>
                <p><span className="price">Стоимость: {PRICE} руб.</span>, включая все материалы и удобную упаковку.</p>
                <p><span className="group">Занятия проходят в группе.</span></p>
                <p><span className="schedule">Площадки проведения мероприятий указаны в карте расписания.</span></p>
                <div className="sign-up-button">
                    <Link to="/workshops/adults">ЗАПИСАТЬСЯ</Link>
                </div>
                <div className="adults-draw-mobile-workshops">
                    <WorkshopsAdults/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if(this.props.adultsDrawImages.isLoading)
            this.props.fetchImages('adults_draw', FETCH_CAROUSEL_ADULTS_DRAW_IMAGES);

    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('adults_draw', FETCH_CAROUSEL_ADULTS_DRAW_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    adultsDrawImages: state.adultsDrawImages.adultsDrawImages,
});

const mapDispatchToProps = {fetchImages};

AdultsDraw.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    adultsDrawImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(AdultsDraw), loadData
};
