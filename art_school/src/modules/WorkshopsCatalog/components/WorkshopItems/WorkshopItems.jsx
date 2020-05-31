import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {formatDate, checkIfBygone, showIfBygone, sortByDate} from '~/modules/WorkshopsCatalog/helpers';
import {FS_IMG_URL} from '~/libs/api';

class WorkshopItems extends Component {
    /*
    * returns image from payload <=> arrElem
    * */
    findWorkshopImage(payload, arrElem) {
        return payload.find(image => image.id == arrElem.imgId);
    }

    render() {
        return (
            <div className="workshops-catalog">
                {sortByDate(checkIfBygone(this.props.workshops)).map(workshop => (
                    <div key={workshop.id} className="workshops-unit">
                        <h3>{workshop.header}</h3>
                        <Link to={`${this.props.link}/${workshop.id}/${workshop.link}`} target="_top">
                            <img
                                src={`${FS_IMG_URL}${this.findWorkshopImage(this.props.images, workshop).id}/${this.findWorkshopImage(this.props.images, workshop).name}?`}
                                alt={workshop.header}/>
                        </Link>
                        <p>{formatDate(workshop.date)} | {workshop.time}</p>
                        <p><Link to="/contacts">{workshop.place}</Link></p>
                        {showIfBygone(workshop)}
                    </div>))}
            </div>
        );
    }
}

export default WorkshopItems;

