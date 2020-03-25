import './Copyright.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const Copyright = () => {
    return (
        <div className="copyright">
            <div className="designed">
                DESIGNED BY <Link to='/about'>EKATERINA PUSHKAREVA</Link>
            </div>
            <div className="frontend">
                FRONTEND BY <a href="https://github.com/victoriaCat" target="_blank">VICTORIA KATYSHEVA</a>
            </div>
        </div>
    );
};

export default Copyright;
