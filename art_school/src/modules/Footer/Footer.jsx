import './Footer.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Copyright from "~/libs/Copyright/Copyright.jsx";
import facebookImg from '~/assets/images/facebook-logo.png';
import instagramImg from '~/assets/images/instagram-logo.png';
import {PHONE_NUMBER, EMAIL, INSTAGRAM_LINK, FACEBOOK_LINK} from '~/assets/infoVars';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <div className="footer-main-info">
                        <p>Контакты</p>
                        <p>{EMAIL}</p>
                        <p>{PHONE_NUMBER}</p>
                        <p>Часы работы с 9.00 - 21.00, без выходных</p>
                    </div>
                    <div className="footer-link-to-main">
                        <h2><Link to="/">Арт-школа Пушкарёвой, 2019 — {new Date().getFullYear()}</Link></h2>
                    </div>
                </div>
                <div className="footer-icons">
                    <a href={FACEBOOK_LINK} target="_blank"><img className="footer-icons__facebook"
                                                                 src={facebookImg}
                                                                 alt="Facebook"/></a>
                    <a href={INSTAGRAM_LINK} target="_blank"><img className="footer-icons__instagram"
                                                                  src={instagramImg}
                                                                  alt="Instagram"/></a>
                </div>
                <div className="footer-link-to-policy">
                    <Link to="/policy" target="_blank">
                        <ScrollToTop/>
                        Политика конфиденциальности
                    </Link>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
};

export default Footer;
