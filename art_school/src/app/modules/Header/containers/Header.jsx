import './Header.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '~/app/modules/Header/components/Navigation/Navigation.jsx';

import logoImg from '~/app/assets/images/logo.svg';
import facebookImg from '~/app/assets/images/facebook-logo.png';
import instagramImg from '~/app/assets/images/instagram-logo.png';


const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/"><img className="logo-img" src={logoImg} alt="Logo"/></Link>
                </div>
                <div className="header-info">
                    <p className="header-phone">8 (800) 555-35-35</p>
                    <p className="header-working-hours">Часы работы с 9.00 до 21.00, без выходных</p>
                </div>
                <div className="header-icons">
                    <a href="https://www.facebook.com/" target="_blank"><img className="header-icons__facebook"
                                                                             src={facebookImg}
                                                                             alt="Facebook"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img className="header-icons__instagram"
                                                                              src={instagramImg}
                                                                              alt="Instagram"/></a>
                </div>
                <button className="header-link-schedule">
                    <Link to="/">Расписание занятий</Link>
                </button>
            </div>
            <Navigation/>
        </header>
    );
};

export default Header;
