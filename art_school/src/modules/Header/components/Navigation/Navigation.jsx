import './Navigation.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import arrowImg from '~/assets/images/arrow.png';
import stickImg from '~/assets/images/flower-stick.png';

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="wrap">
                    <ul className="nav-list">
                        <li className="nav-list-item"><HashLink to="/#options">ЗАНЯТИЯ</HashLink></li>
                        <li className="nav-list-item">РАСПИСАНИЕ <img className="schedule-arrow" src={arrowImg} alt=""/>
                            <div className="schedule-links">
                                <img src={stickImg} alt=""/>
                                <ul>
                                    <li><Link to="/workshops/adults">взрослые</Link></li>
                                    <li><Link to="/workshops/kids">дети</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-list-item"><Link to="/about">ОБО МНЕ</Link></li>
                        <li className="nav-list-item"><Link to="/contacts">КОНТАКТЫ</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
