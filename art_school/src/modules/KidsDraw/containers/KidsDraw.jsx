import './KidsDraw.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Preloader from '~/libs/Preloader/Preloader.jsx';
import CarouselKids from '~/modules/KidsDraw/components/CarouselKids/CarouselKids.jsx';
import {fetchImages} from '~/libs/commonActions';
import {FETCH_CAROUSEL_KIDS_DRAW_IMAGES} from '~/modules/KidsDraw/actionTypes';
import {PRICE, DURATION} from '~/assets/infoVars';
import WorkshopsKids from '~/modules/WorkshopsCatalog/containers/WorkshopsKids/WorkshopsKids.jsx';
import {Link} from "react-router-dom";
import Header from "~/modules/Header/containers/Header.jsx";
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
                <div className="kids-draw-mobile-header">
                    <Header/>
                </div>
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
                <p><span className="price">Стоимость: {PRICE} руб.</span>, включая все материалы и удобную упаковку.</p>
                <p><span className="group">Занятия проходят в группе.</span></p>
                <p><span className="schedule">Площадки проведения мероприятий указаны в карте расписания.</span></p>
                <p>Группы делятся по возрастным категориям — I 6-10 лет, II 11-15 лет.</p>
                <button className="sign-up-button">
                    <Link to="/workshops/kids">ЗАПИСАТЬСЯ</Link>
                </button>
                <div className="kids-draw-mobile-workshops">
                    <WorkshopsKids/>
                </div>
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
