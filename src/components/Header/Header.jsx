import React from 'react';
import './Header.sass';
import '../Body/Body.module.sass'
import logo from "../../assets/img/header-lupa.svg";
import {NavLink} from 'react-router-dom';


let Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-block">
                    <div className="logotype">
                        <h2><NavLink to='/'>Социально-Кредитная сеть</NavLink></h2>
                    </div>
                    <div className="top__menu">
                        <ul>
                            <li><NavLink to='/all-announcement' className='link'>Все объявления</NavLink></li>
                            <li><NavLink to='/podat-obyavlenie' className='link'>Подать объявление</NavLink></li>
                            <li><NavLink to='/help' className='link'>Помощь</NavLink></li>
                        </ul>
                    </div>
                    <div className="phone__number">
                        <h2><NavLink to=''>8 800 000 00 00</NavLink></h2>
                    </div>

                    <div className="block__top__auth">
                        <NavLink to='/search'><img src={logo} alt="{logo}"/></NavLink>
                        <p id="top-auth-button"><a href='' className="button" onclick='return false;'>ВОЙТИ</a></p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;