import React from 'react';
import './Footer.sass';
import footerLogo from "../../assets/img/footer__under-pic.svg";
import {NavLink} from 'react-router-dom';



let Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="footer-block">

                    <div className="footer__upper-block">
                        <div className="logotip logotip-footer">
                            <h2><a href="#">Социально-Кредитная сеть</a></h2>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><NavLink to = '/help'className='link'>Все объявления</NavLink></li>
                                <li><NavLink to = '/podat-obyavlenie'className='link'>Подать объявление</NavLink></li>
                                <li><NavLink to = '/safety' className='link'>Безопасность</NavLink></li>
                                <li><NavLink to = '/about-us' className='link'>О нас</NavLink></li>                                
                            </ul>
                        </div>
                    </div>

                    <div className="footer__under-block">
                        <div className="footer__under-item">
                            <span>© 2020 «Социально-Кредитная сеть»</span>
                        </div>
                        <div className="footer__under-item">
                            <a href="#p">Политика конфиденциальности</a>
                        </div>
                        <div className="footer__under-item">
                            <img src={footerLogo} height="" width="253px" alt="" id="footer__under-pic" />
                        </div>
                    </div>
                    
                </div>
            </div>
	    </footer>
    );
}

export default Footer;