import './MainOption.scss';

import React from 'react';
import {Link} from 'react-router-dom';

const MainOption = (props) => {
    return (
        <div className="main-option">
            <h4>
                <Link to="/">{props.header}</Link>
            </h4>
            <div className="main-option-image">
                <Link to="/"><img src={props.img} alt={props.header}/></Link>
            </div>
        </div>
    );
};

export default MainOption;
