import './Workshop.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import WorkshopAdults from '~/modules/Workshop/containers/WorkshopAdults/WorkshopAdults.jsx';
import WorkshopKids from '~/modules/Workshop/containers/WorkshopKids/WorkshopKids.jsx';
import {connect} from "react-redux";
import {fetchImages} from '~/libs/commonActions';
import {FETCH_WORKSHOP_PAGE_IMAGES} from './actionTypes';

const determineAlbum = (path) => {
    let album;
    const linkArr = path.split('/');
    if (linkArr.some((item) => {
        return item === 'adults';
    })) {
        album = 'workshop_' + linkArr[linkArr.length - 1] + '_adults';
    }
    if (linkArr.some((item) => {
        return item === 'kids';
    })) {
        album = 'workshop_' + linkArr[linkArr.length - 1] + '_kids';
    }
    return album;
};

class Workshop extends Component {

    determineLink(path) {
        const linkArr = path.split('/');
        return linkArr[linkArr.length - 1];
    }

    determinePath(path) {
        let pathArr = path.split('/');
        let partPath = '/' + pathArr[1] + '/' + pathArr[2] + '/';
        switch (partPath) {
            case '/workshops/adults/':
                return <WorkshopAdults images={this.props.workshopPageImages.payload}
                                       link={this.determineLink(this.props.location.pathname)}/>;
            case '/workshops/kids/':
                return <WorkshopKids images={this.props.workshopPageImages.payload}
                                     link={this.determineLink(this.props.location.pathname)}/>;
            default :
                return <Preloader/>;
        }
    }

    render() {
        return (
            <div className="workshop-page">
                {this.determinePath(this.props.location.pathname)}
            </div>
        );
    }

    componentDidMount() {
        if(this.props.workshopPageImages.isLoading){
            this.props.fetchImages(determineAlbum(this.props.location.pathname), FETCH_WORKSHOP_PAGE_IMAGES);
        }
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages(determineAlbum('/workshops/adults/impressionisty'), FETCH_WORKSHOP_PAGE_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    workshopPageImages: state.workshop.workshopPageImages
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
