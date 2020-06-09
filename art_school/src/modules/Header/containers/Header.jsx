import './Header.scss';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navigation from '~/modules/Header/components/Navigation/Navigation.jsx';
import logoImg from '~/assets/images/logo.svg';
import facebookImg from '~/assets/images/facebook-logo.png';
import instagramImg from '~/assets/images/instagram-logo.png';
import youtubeImg from '~/assets/images/youtube.png';
import phoneImg from '~/assets/images/phone.png';
import navImg from '~/assets/images/mob-nav.png';
import stickImg from '~/assets/images/stick.png';
import {PHONE_NUMBER, TEL_ATTRIBUTE, INSTAGRAM_LINK, FACEBOOK_LINK, YOUTUBE_LINK} from '~/assets/infoVars';
import {decodeString} from '~/libs/commonHelpers';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telephone: TEL_ATTRIBUTE
        }
    }

    componentDidMount() {
        this.setState({telephone: decodeString(TEL_ATTRIBUTE)})
    }

    render() {
        return (
            <header className="header">
                <div className="header-container">
                    <div className="header-mobile-nav-button">
                        <img src={navImg} alt="Navigation"/>
                        <div className="header-mobile-nav">
                            <ul>
                                <li><Link to="/about">ОБО МНЕ</Link></li>
                                <li className="mobile-nav-workshops"><a>МАСТЕР-КЛАССЫ</a>
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
                                <a href={YOUTUBE_LINK} target="_blank"><img className="header-icons__youtube"
                                                                              src={youtubeImg}
                                                                              alt="Youtube"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="header-logo">
                        <Link to="/"><img className="logo-img" src={logoImg} alt="Logo"/></Link>
                    </div>
                    <div className="header-info">
                        <p className="header-phone">
                            <a href={'tel:' + this.state.telephone}>{decodeString(PHONE_NUMBER)}</a>
                        </p>
                        <p className="header-working-hours">Часы работы с 9.00 до 21.00, без выходных</p>
                    </div>
                    <div className="header-icons">
                        <a href={FACEBOOK_LINK} target="_blank"><img className="header-icons__facebook"
                                                                     src={facebookImg}
                                                                     alt="Facebook"/></a>
                        <a href={INSTAGRAM_LINK} target="_blank"><img className="header-icons__instagram"
                                                                      src={instagramImg}
                                                                      alt="Instagram"/></a>
                        <a href={YOUTUBE_LINK} target="_blank"><img className="header-icons__youtube"
                                                                    src={youtubeImg}
                                                                    alt="Youtube"/></a>
                    </div>
                    <div className="header-link-schedule">
                        <Link to="/workshops">Расписание занятий</Link>
                    </div>
                    <div className="header-mobile-call-button"><a href={'tel:' + this.state.telephone}><img src={phoneImg}
                                                                                               alt="Call Us"/></a></div>
                </div>
                <Navigation/>
            </header>
        );
    }
}

export default Header;

