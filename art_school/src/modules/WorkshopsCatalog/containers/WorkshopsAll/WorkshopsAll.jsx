import './WorkshopsAll.scss';
import React, {Component} from 'react';
import WorkshopsAdults from '~/modules/WorkshopsCatalog/containers/WorkshopsAdults/WorkshopsAdults.jsx';
import WorkshopsKids from '~/modules/WorkshopsCatalog/containers/WorkshopsKids/WorkshopsKids.jsx';

class WorkshopsAll extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="workshops-container">
                <WorkshopsAdults images={this.props.imagesAdults}/>
                <WorkshopsKids images={this.props.imagesKids}/>
            </div>
        );
    }
}

export default WorkshopsAll;