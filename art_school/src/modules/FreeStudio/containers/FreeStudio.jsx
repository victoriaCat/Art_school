import './FreeStudio.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchImages} from '~/libs/commonActions';
import {FETCH_FREE_STUDIO_IMAGE} from '~/modules/FreeStudio/actionTypes';
import {FS_IMG_URL} from '~/libs/api';
import {connect} from "react-redux";
import Preloader from '~/libs/Preloader/Preloader.jsx';
import Footer from '~/modules/Footer/Footer.jsx';
import {PRICE, DURATION} from '~/assets/infoVars';
import Header from "~/modules/Header/containers/Header.jsx";

class FreeStudio extends Component {
    /*
    * returns {Preloader || FreeStudio Image}
    * */
    showFreeStudioImage() {
        return this.props.freeStudioImage.isLoading ? <Preloader/> : <img
            src={`${FS_IMG_URL}${this.props.freeStudioImage.payload[0].id}/${this.props.freeStudioImage.payload[0].name}?`}
            alt={this.props.freeStudioImage.payload[0].name}/>
    }

    render() {
        return (
            <div className="free-studio">
                <div className="free-studio-mobile-header">
                    <Header/>
                </div>
                <div className="free-studio-container">
                    <h2>Свободная мастерская</h2>
                    <div className="free-studio-picture">
                        {this.showFreeStudioImage()}
                    </div>
                    <div className="free-studio-info">
                        <p>В Свободной мастерской под чутким руководством художника-педагога</p>
                        <h3>ВЫ СМОЖЕТЕ НАУЧИТЬСЯ:</h3>
                        <ul>
                            <li>воплощать свои творческие замыслы</li>
                            <li>копировать известные картины</li>
                        </ul>
                        <h3>КОНЦЕПТ</h3>
                        <p>Пишем картину по вашему выбору (копия) или задумке.</p>

                        <h3>Основные материалы и техники мастерской:</h3>
                        <ul>
                            <li>масляная живопись</li>
                            <li>гуашь</li>
                            <li>сухая пастель</li>
                        </ul>

                        <p>Продолжительность: {DURATION} часа</p>
                        <p>Стоимость: {PRICE} руб</p>
                        <p>Минимальный возраст — 12 лет.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.freeStudioImage.isLoading)
            this.props.fetchImages('free_studio', FETCH_FREE_STUDIO_IMAGE);
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('free_studio', FETCH_FREE_STUDIO_IMAGE))
    ]);
};

const mapStateToProps = state => ({
    freeStudioImage: state.freeStudioImage.freeStudioImage
});

const mapDispatchToProps = {fetchImages};

FreeStudio.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    freeStudioImage: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(FreeStudio), loadData
};
