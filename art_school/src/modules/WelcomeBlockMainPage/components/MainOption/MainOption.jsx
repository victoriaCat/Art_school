import './MainOption.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {FS_IMG_URL} from '~/libs/api';

const MainOption = (props) => {
    return (
        <div className="main-option">
            <h4>
                <Link to={props.option.link}>{props.option.header}</Link>
            </h4>
            <div className="main-option-image">
                <Link to={props.option.link}><img
                    src={`${FS_IMG_URL}${props.image.id}/${props.image.name}?`}
                    alt={props.option.header}/></Link>
            </div>
        </div>
    );
};

export default MainOption;
