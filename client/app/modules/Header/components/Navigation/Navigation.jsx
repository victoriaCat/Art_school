import './Navigation.scss';

import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="wrap">
                    <ul>
                        <li><Link to="/">ЗАНЯТИЯ</Link></li>
                        <li><Link to="/">РАСПИСАНИЕ</Link></li>
                        <li><Link to="/home/about_me">ОБО МНЕ</Link></li>
                        <li><Link to="/home/contacts">КОНТАКТЫ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
