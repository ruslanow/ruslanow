import React from 'react';
import styles from './Header.module.sass';
import '../Body/Body.module.sass'
import logo from "../../assets/img/header-lupa.svg";
import {NavLink} from 'react-router-dom';





let Header = () => {



    return (
        <header>
            <div className={styles.container}>
                <div className={styles.headerBlock}>
                    <div className={styles.logotype}>
                        <h2><NavLink to='/'>Социально-Кредитная сеть</NavLink></h2>
                    </div>
                    <div className={styles.top__menu}>
                        <ul>
                            <li><NavLink to='/all-announcement' className={styles.link}>Все объявления</NavLink></li>
                            <li><NavLink to='/podat-obyavlenie' className={styles.link}>Подать объявление</NavLink></li>
                            <li><NavLink to='/help' className={styles.link}>Помощь</NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.phone__number}>
                        <h2><NavLink to=''>8 800 000 00 00</NavLink></h2>
                    </div>

                    <div className={styles.block__top__auth}>
                        <NavLink to='/search'><img src={logo} alt="{logo}"/></NavLink>
                        <p className={styles.topauthbutton}><a href='' className={styles.button}
                                                               onclick='return false;'>ВОЙТИ</a></p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;