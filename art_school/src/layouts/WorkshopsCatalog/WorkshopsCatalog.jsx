import './WorkshopsCatalog.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import WorkshopsAdults from '~/modules/WorkshopsCatalog/containers/WorkshopsAdults/WorkshopsAdults.jsx';
import WorkshopsKids from '~/modules/WorkshopsCatalog/containers/WorkshopsKids/WorkshopsKids.jsx';
import WorkshopsAll from '~/modules/WorkshopsCatalog/containers/WorkshopsAll/WorkshopsAll.jsx';
import {connect} from "react-redux";
import {fetchImages} from '~/libs/commonActions';
import {
    FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES,
    FETCH_WORKSHOPS_CATALOG_KIDS_IMAGES
} from '~/layouts/WorkshopsCatalog/actionTypes';

class WorkshopsCatalog extends Component {

    determinePath(path) {
        switch (path) {
            case '/workshops':
                return <WorkshopsAll imagesAdults={this.props.workshopsCatalogAdultsImages.payload}
                                     imagesKids={this.props.workshopsCatalogKidsImages.payload}/>;
            case '/workshops/adults':
                return <WorkshopsAdults images={this.props.workshopsCatalogAdultsImages.payload}/>;
            case '/workshops/kids':
                return <WorkshopsKids images={this.props.workshopsCatalogKidsImages.payload}/>;
            default :
                return <Preloader/>;
        }
    }

    render() {
        return (
            <div className="workshops-catalog">
                {this.determinePath(this.props.location.pathname)}
            </div>
        );
    }

    componentDidMount() {
        if (this.props.workshopsCatalogAdultsImages.isLoading)
            this.props.fetchImages('workshops_adults', FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES);
        if (this.props.workshopsCatalogKidsImages.isLoading)
            this.props.fetchImages('workshops_kids', FETCH_WORKSHOPS_CATALOG_KIDS_IMAGES);
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('workshops_adults', FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES)),
        store.dispatch(fetchImages('workshops_kids', FETCH_WORKSHOPS_CATALOG_KIDS_IMAGES)),
    ]);
};

const mapStateToProps = state => ({
    workshopsCatalogAdultsImages: state.workshopsCatalog.workshopsCatalogAdultsImages,
    workshopsCatalogKidsImages: state.workshopsCatalog.workshopsCatalogKidsImages
});

const mapDispatchToProps = {fetchImages};

WorkshopsCatalog.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    workshopsCatalogAdultsImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired,
    workshopsCatalogKidsImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(WorkshopsCatalog), loadData
};