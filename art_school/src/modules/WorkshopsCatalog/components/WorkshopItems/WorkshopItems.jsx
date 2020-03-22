import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {formatDate, checkIfBygone, showIfBygone, sortByDate} from '~/modules/WorkshopsCatalog/helpers';
import {FS_IMG_URL} from '~/libs/api';

class WorkshopItems extends Component {

    render() {
        return (
            <>
                {sortByDate(checkIfBygone(this.props.workshops)).map(workshop => (
                    <div key={workshop.id} className="workshops-unit">
                        <h3>{workshop.header}</h3>
                        <Link to={`${this.props.link}/${workshop.id}/${workshop.link}`} target='_blank'>
                            <img
                                src={`${FS_IMG_URL}${this.props.images.find(image => image.id == workshop.imgId).id}/${workshop.imgName}?`}
                                alt={workshop.header}/>
                        </Link>
                        <p>{formatDate(workshop.date)} | {workshop.time}</p>
                        <p>{workshop.place}</p>
                        {showIfBygone(workshop)}
                    </div>))}
            </>
        );
    }
}

export default WorkshopItems;

