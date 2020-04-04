import './App.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {renderRoutes} from "react-router-config";
import {connect} from "react-redux";
import {fetchWorkshops} from "~/libs/commonActions";
import {FETCH_WORKSHOPS_ALL_DATA, FETCH_WORKSHOPS_ADULTS_DATA, FETCH_WORKSHOPS_KIDS_DATA} from './actionTypes';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {renderRoutes(this.props.route.routes)}
            </>
        );
    }

    componentDidMount() {
        if(this.props.workshopsAllData.isLoading)
        this.props.fetchWorkshops('', FETCH_WORKSHOPS_ALL_DATA);
        if(this.props.workshopsAdultsData.isLoading)
            this.props.fetchWorkshops('a', FETCH_WORKSHOPS_ADULTS_DATA);
        if(this.props.workshopsKidsData.isLoading)
            this.props.fetchWorkshops('c', FETCH_WORKSHOPS_KIDS_DATA);
    }
}

const loadData = (store) => {
    return Promise.all([
        store.dispatch(fetchWorkshops('', FETCH_WORKSHOPS_ALL_DATA)),
        store.dispatch(fetchWorkshops('a', FETCH_WORKSHOPS_ADULTS_DATA)),
        store.dispatch(fetchWorkshops('c', FETCH_WORKSHOPS_KIDS_DATA))
    ]);
};

const mapStateToProps = state => ({
    workshopsAllData: state.workshopsData.workshopsAllData,
    workshopsAdultsData: state.workshopsData.workshopsAdultsData,
    workshopsKidsData: state.workshopsData.workshopsKidsData
});

const mapDispatchToProps = {fetchWorkshops};

App.defaultProps = {
    route: null
};

App.propTypes = {
    fetchWorkshops: PropTypes.func.isRequired,
    workshopsAllData: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        payload: PropTypes.array,
    }).isRequired,
    workshopsAdultsData: PropTypes.object.isRequired,
    workshopsKidsData: PropTypes.object.isRequired
};

export default {
    component: connect(
        mapStateToProps,
        mapDispatchToProps
    )(App), loadData
};
