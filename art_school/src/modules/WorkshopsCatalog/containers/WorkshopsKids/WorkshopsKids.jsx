import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Preloader from '~/libs/Preloader/Preloader.jsx';
import {fetchImages} from '~/libs/commonActions';
import {FETCH_WORKSHOPS_CATALOG_KIDS_IMAGES} from './actionTypes';
import {connect} from "react-redux";
import WorkshopItems from "~/modules/WorkshopsCatalog/components/WorkshopItems/WorkshopItems.jsx";
import {store} from '~/store';
const WORKSHOPS_KIDS = store.getState().workshopsData.workshopsKidsData.payload;

class WorkshopsKids extends Component {
    /*
      * returns {Preloader || WorkshopItems}
      * */
    showWorkshopItems(allProps) {
        let {isLoading, payload = []} = allProps;
        if (allProps === this.props.workshopsKidsImages)
            return isLoading ? <Preloader/> :
                <WorkshopItems images={payload} workshops={WORKSHOPS_KIDS} link={'/workshops/kids'}/>
    }

    render() {
        return (
            <div className="workshops-wrapper">
                <h2>МАСТЕР-КЛАССЫ <br/><span className="rainbow-d">Д<span className="rainbow-e">Е<span
                    className="rainbow-t">Т<span className="rainbow-i">И</span></span></span></span></h2>
                {this.showWorkshopItems(this.props.workshopsKidsImages)}
            </div>
        );
    }

    componentDidMount() {
        if (this.props.workshopsKidsImages.isLoading) {
            this.props.fetchImages('workshops_kids', FETCH_WORKSHOPS_CATALOG_KIDS_IMAGES);
        }
    }
}

export const loadDataKids = (store) => {
    return Promise.all([
        store.dispatch(fetchImages('workshops_kids', FETCH_WORKSHOPS_CATALOG_KIDS_IMAGES))
    ]);
};

const mapStateToProps = state => ({
    workshopsKidsImages: state.workshopsKids.workshopsKidsImages
});

const mapDispatchToProps = {fetchImages};

WorkshopsKids.propTypes = {
    fetchImages: PropTypes.func.isRequired,
    workshopsKidsImages: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkshopsKids);



