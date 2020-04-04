import './WorkshopsAll.scss';
import React, {Component} from 'react';
import WorkshopsAdults from '~/modules/WorkshopsCatalog/containers/WorkshopsAdults/WorkshopsAdults.jsx';
import WorkshopsKids from '~/modules/WorkshopsCatalog/containers/WorkshopsKids/WorkshopsKids.jsx';

class WorkshopsAll extends Component {
    render() {
        return (
            <div className="workshops-container">
                <WorkshopsAdults/>
                <WorkshopsKids/>
            </div>
        );
    }

}

export default WorkshopsAll;