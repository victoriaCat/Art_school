import './Workshop.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import LibSlider from '~/libs/LibSlider/LibSlider.jsx';
import SignUpModal from '~/libs/SignUpModal/SignUpModal.jsx';
import {fetchImages} from '~/libs/commonActions';
import {findWorkshop, determineID, determineAlbum} from "~/modules/Workshop/helpers";
import {formatDate, checkIfBygone, showIfBygone} from '~/modules/WorkshopsCatalog/helpers';
import {WORKSHOPS} from "~/assets/productVars";
import {PRICE} from '~/assets/infoVars';
import {FETCH_WORKSHOP_PAGE_IMAGES} from "~/modules/Workshop/containers/Workshop/actionTypes";
import {FS_IMG_URL} from '~/libs/api';

class Workshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    /*
   * returns {Preloader || WorkshopSlider || WorkshopImage}
   * */
    showWorkshopImages(allProps) {
        let {isLoading, payload} = allProps;
        if ((allProps === this.props.workshopPageImages) && (payload.length > 1)) {
            return isLoading ? <Preloader/> : <LibSlider images={payload}/>;
        } else if ((allProps === this.props.workshopPageImages) && (payload.length === 1)) {
            return <img src={`${FS_IMG_URL}${payload[0].id}/${payload[0].name}?`} alt={payload[0].name}/>;
        }
    }

    showSignUpModal = e => {
        this.setState({showModal: !this.state.showModal});
    };

    showSignUpButton(workshop) {
        if (!workshop.bygone) {
            return <button className="workshop-sign-up-button" onClick={e => {this.showSignUpModal();}}>
                ЗАПИСАТЬСЯ
            </button>
        } else return null;
    }

    render() {
        let workshop = findWorkshop(checkIfBygone(WORKSHOPS), determineID(this.props.location.pathname));
        return (
            <div className="workshop-container">
                <h2>МАСТЕР-КЛАСС <br/> <span className="header-color">{workshop.header}</span></h2>
                <div className="workshop-description">
                    <div className="workshop-images">
                        {this.showWorkshopImages(this.props.workshopPageImages)}
                    </div>
                    <div className="workshop-details">
                        <p>{formatDate(workshop.date)} | {workshop.time}</p>
                        {showIfBygone(workshop)}
                        <p><span className="nevermind">Уровень подготовки не важен!</span></p>
                        <p>{workshop.description}</p>
                        <p><span className="price">Стоимость: {PRICE} руб.</span>, включая все материалы и удобную упаковку. </p>

                        <h3><span className="awaits">ЧТО ЖДЁТ НА МАСТЕРКЛАССЕ:</span></h3>
                        <ul>
                            <li>Авторский метод обучения и собственноручно написанная картина всего за 1 занятие</li>
                            <li>Творчество в комфортной обстановке светлой мастерской</li>
                            <li>Заботливо подготовленное рабочее место и все материалы – качественный холст 50x40, кисти
                                и масляные краски, фартук, упаковка для картины
                            </li>
                            <li>Общение с художником и свежезаваренный чай</li>
                        </ul>
                        <p className="workshop-footnote">
                            <span className="footnote"><i>{workshop.footnote}</i></span>
                        </p>
                    </div>
                </div>
                {this.showSignUpButton(workshop)}
                <SignUpModal onClose={this.showSignUpModal} showModal={this.state.showModal}
                             workshop={workshop}/>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchImages(determineAlbum(this.props.location.pathname), FETCH_WORKSHOP_PAGE_IMAGES);
    }

}

const loadData = (store, id) => {
    return Promise.all([
        store.dispatch(fetchImages(determineAlbum(id), FETCH_WORKSHOP_PAGE_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    workshopPageImages: state.workshopPage.workshopPageImages
});

const mapDispatchToProps = {fetchImages};

Workshop.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    workshopPageImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(Workshop), loadData
};

