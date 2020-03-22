import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import {FS_IMG_URL} from '~/libs/api';
import {WORKSHOPS_ADULTS} from "~/assets/productVars";
import {FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES} from './actionTypes';
import {connect} from "react-redux";
import {fetchImages} from '~/libs/commonActions';
import WorkshopItems from "~/modules/WorkshopsCatalog/components/WorkshopItems/WorkshopItems.jsx";

class WorkshopsAdults extends Component {
    /*
   * returns {Preloader || WorkshopItems}
   * */
    showWorkshopItems(allProps) {
        let {isLoading, payload = []} = allProps;
        if (allProps === this.props.workshopsAdultsImages)
            return isLoading ? <Preloader/> :
                <WorkshopItems images={payload} workshops={WORKSHOPS_ADULTS} link={'/workshops/adults'}/>
    }

    render() {
        return (
            <div className="workshops-wrapper">
                <h2>МАСТЕР-КЛАССЫ</h2>
                {this.showWorkshopItems(this.props.workshopsAdultsImages)}
            </div>
        );
    }

    componentDidMount() {
        if (this.props.workshopsAdultsImages.isLoading) {
            this.props.fetchImages('workshops_adults', FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES);
        }
    }
}

export const loadDataAdults = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('workshops_adults', FETCH_WORKSHOPS_CATALOG_ADULTS_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    workshopsAdultsImages: state.workshopsAdults.workshopsAdultsImages
});

const mapDispatchToProps = {fetchImages};

WorkshopsAdults.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    workshopsAdultsImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkshopsAdults);



