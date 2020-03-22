import './Header.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '~/modules/Header/components/Navigation/Navigation.jsx';

import logoImg from '~/assets/images/logo.svg';
import facebookImg from '~/assets/images/facebook-logo.png';
import instagramImg from '~/assets/images/instagram-logo.png';
import phoneImg from '~/assets/images/phone.png';
import navImg from '~/assets/images/mob-nav.png';
import arrowImg from '~/assets/images/arrow.png';
import stickImg from '~/assets/images/flower-stick.png';
import {PHONE_NUMBER, INSTAGRAM_LINK, FACEBOOK_LINK} from '~/assets/infoVars';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <button className="header-mobile-nav-button">
                    <img src={navImg} alt="Navigation"/>
                    <div className="header-mobile-nav">
                        <ul>
                            <li><Link to="/about">ОБО МНЕ</Link></li>
                            <li className="mobile-nav-workshops">МАСТЕР-КЛАССЫ <img className="mobile-arrow" src={arrowImg} alt=""/>
                                <div className="mobile-nav-workshops-links">
                                    <img className="mobile-stick" src={stickImg} alt=""/>
                                    <ul>
                                        <li><Link to="/adults_draw">рисуют взрослые</Link></li>
                                        <li><Link to="/kids_draw">рисуют дети</Link></li>
                                        <li><Link to="/free_studio">свободная мастерская</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/contacts">КОНТАКТЫ</Link></li>
                        </ul>
                        <div className="header-mobile-nav-icons">
                            <a href={FACEBOOK_LINK} target="_blank"><img className="header-icons__facebook"
                                                                         src={facebookImg}
                                                                         alt="Facebook"/></a>
                            <a href={INSTAGRAM_LINK} target="_blank"><img className="header-icons__instagram"
                                                                          src={instagramImg}
                                                                          alt="Instagram"/></a>
                        </div>
                    </div>
                </button>
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
                    <Link to="/workshops">Расписание занятий</Link>
                </button>
                <div className="header-mobile-call-button"><a href="tel:+74994440961"><img src={phoneImg}
                                                                                           alt="Call Us"/></a></div>
            </div>
            <Navigation/>
        </header>
    );
};

export default Header;
