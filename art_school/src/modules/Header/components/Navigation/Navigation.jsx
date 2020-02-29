import './Navigation.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="wrap">
                    <ul>
                        <li><HashLink to="/#options">ЗАНЯТИЯ</HashLink></li>
                        <li><Link to="/">РАСПИСАНИЕ</Link></li>
                        <li><Link to="/about">ОБО МНЕ</Link></li>
                        <li><Link to="/contacts">КОНТАКТЫ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
