import './Copyright.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const Copyright = () => {
    return (
        <div className="copyright">
            <p>
                <span>&copy; Designed by <Link to='/about'>Ekaterina Pushkareva</Link>.</span>&nbsp;
                <span>Developed by <a href="https://github.com/victoriaCat" target="_blank">Victoria Katysheva</a></span>
            </p>
        </div>
    );
};

export default Copyright;
