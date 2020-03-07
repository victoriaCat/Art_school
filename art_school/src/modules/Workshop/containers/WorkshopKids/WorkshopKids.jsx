import React, {Component} from 'react';
import {WORKSHOPS_KIDS} from "~/assets/productVars";

class WorkshopKids extends Component {
    constructor(props) {
        super(props)
    }

    findWorkshop(link) {
       return WORKSHOPS_KIDS.find(workshop => workshop.link === link);
    }

    render() {
        return (
            <div className="workshop-container">
                <h2>{this.findWorkshop(this.props.link).header}</h2>
            </div>
        );
    }
}

export default WorkshopKids;
