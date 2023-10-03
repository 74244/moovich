import React from "react";
import './footer.scss'

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to='/'>Moovich</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to='/'>Главная</Link>
                        <Link to='/'>Напишите нам</Link>
                        <Link to='/'>Условия обслуживания</Link>
                        <Link to='/'>О нас</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to='/'>Live</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Премиум</Link>
                        <Link to='/'>Политика конфиденциальности</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to='/'>Вы должны посмотреть</Link>
                        <Link to='/'>Последние релизы</Link>
                        <Link to='/'>Топ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;