import './AdultsDraw.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import CarouselAdults from '~/modules/AdultsDraw/components/CarouselAdults.jsx';
import {fetchImages} from '~/libs/commonActions';
import {FETCH_CAROUSEL_ADULTS_DRAW_IMAGES} from '~/modules/AdultsDraw/actionTypes';
import {connect} from "react-redux";

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
                <h2>Рисуют взрослые</h2>
                {this.showAdultsDrawCarousel(this.props.adultsDrawImages)}
                <p>В Школу рисования Екатерины Пушкарёвой приходят люди всех возрастов. Здесь каждому помогают раскрыть
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
                <p>Продолжительность: 3 часа</p>
                <p>Стоимость: 1700 руб., включая все материалы и удобную упаковку.</p>
                <p>Занятия проходят в группе.</p>
                <p>Площадки проведения мероприятий указаны в карте расписания.</p>
            </div>
        );
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
