import './Header.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '~/modules/Header/components/Navigation/Navigation.jsx';

import logoImg from '~/assets/images/logo.svg';
import facebookImg from '~/assets/images/facebook-logo.png';
import instagramImg from '~/assets/images/instagram-logo.png';
import {PHONE_NUMBER, INSTAGRAM_LINK, FACEBOOK_LINK} from '~/assets/vars';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/"><img className="logo-img" src={logoImg} alt="Logo"/></Link>
                </div>
                <div className="header-info">
                    <p className="header-phone">{PHONE_NUMBER}</p>
                    <p className="header-working-hours">Часы работы с 9.00 до 21.00, без выходных</p>
                </div>
                <div className="header-icons">
                    <a href={FACEBOOK_LINK} target="_blank"><img className="header-icons__facebook"
                                                                             src={facebookImg}
                                                                             alt="Facebook"/></a>
                    <a href={INSTAGRAM_LINK} target="_blank"><img className="header-icons__instagram"
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
