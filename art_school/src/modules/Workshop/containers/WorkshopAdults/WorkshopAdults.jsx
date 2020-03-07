import React, {Component} from 'react';
import {WORKSHOPS_ADULTS} from "~/assets/productVars";

class WorkshopAdults extends Component {
    constructor(props) {
        super(props)
    }

    findWorkshop(link) {
        return WORKSHOPS_ADULTS.find(workshop => workshop.link === link);
    }

    render() {
        return (
            <div className="workshop-container">
                <h2>{this.findWorkshop(this.props.link).header}</h2>
            </div>
        );
    }
}

export default WorkshopAdults;

