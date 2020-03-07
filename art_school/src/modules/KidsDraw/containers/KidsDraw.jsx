import './KidsDraw.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Preloader from '~/libs/Preloader/Preloader.jsx';
import CarouselKids from '~/modules/KidsDraw/components/CarouselKids/CarouselKids.jsx';
import {fetchImages} from '~/libs/commonActions';
import {FETCH_CAROUSEL_KIDS_DRAW_IMAGES} from '~/modules/KidsDraw/actionTypes';
import {PRICE, DURATION} from '~/assets/infoVars';

class KidsDraw extends Component {
    /*
    * returns {Preloader || CarouselKids}
    * */
    showKidsDrawCarousel(allProps) {
        let {isLoading, payload = []} = allProps;
        if (allProps === this.props.kidsDrawImages)
            return isLoading ? <Preloader/> : <CarouselKids images={payload}/>;
        else
            return <Preloader/>;
    }

    render() {
        return (
            <div className="kids-draw">
                <h2>Рисуют дети</h2>
                {this.showKidsDrawCarousel(this.props.kidsDrawImages)}
                <p>Зачастую дети видят картину красивой, но не понимают какие средства художественной выразительности
                    делают её таковой. </p>
                <h3>ЧТО ПОЛУЧИТ РЕБЁНОК НА ЗАНЯТИЯХ:</h3>
                <ul>
                    <li>Знание основных законов рисунка и живописи</li>
                    <li>Опыт работы в различных техниках (масло, гуашь, пастель)</li>
                    <li>Изучение на практике различных жанров, истории искусств</li>
                    <li>Любовь и заинтересованность к искусству</li>
                </ul>
                <p>Благодаря индивидуальному подходу и разделению по возрастным категориям в группах, ребёнок комфортно
                    вольётся в процесс обучения. </p>
                <p>Продолжительность: {DURATION} часа</p>
                <p>Стоимость: {PRICE} руб., включая все материалы и удобную упаковку.</p>
                <p>Занятия проходят в группе.</p>
                <p>Площадки проведения мероприятий указаны в карте расписания.</p>
                <p>Группы делятся по возрастным категориям — I 6-10 лет, II 11-15 лет.</p>
            </div>
        );
    }

    componentDidMount() {
        if(this.props.kidsDrawImages.isLoading){
            this.props.fetchImages('kids_draw', FETCH_CAROUSEL_KIDS_DRAW_IMAGES);
        }
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('kids_draw', FETCH_CAROUSEL_KIDS_DRAW_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    kidsDrawImages: state.kidsDrawImages.kidsDrawImages,
});

const mapDispatchToProps = {fetchImages};

KidsDraw.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    kidsDrawImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(KidsDraw), loadData
};
