import './Footer.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import facebookImg from '~/assets/images/facebook-logo.svg';
import instagramImg from '~/assets/images/instagram-logo.svg';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <div className="footer-main-info">
                        <p>Контакты</p>
                        <p>inbox@inbox.ru</p>
                        <p>8 (800) 555-35-35</p>
                        <p>Часы работы с 9.00 - 21.00, без выходных</p>
                    </div>
                    <div className="footer-link-to-main">
                        <h2><Link to="/">Арт-школа Sample Text, 2019</Link></h2>
                    </div>
                </div>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/" target="_blank"><img className="footer-icons__facebook"
                                                                             src={facebookImg}
                                                                             alt="Facebook"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img className="footer-icons__instagram"
                                                                              src={instagramImg}
                                                                              alt="Instagram"/></a>
                </div>
                <div className="footer-link-to-policy">
                    <Link to="/">Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
