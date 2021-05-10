import React from 'react';
import styles from './Header.module.sass';
import logo from "../../assets/img/header-lupa.svg";
import {NavLink} from 'react-router-dom';


let Header = (props) => {

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.headerBlock}>
                    <div className={styles.logotype}>
                        <h2><NavLink to='/'>Тестовый проект</NavLink></h2>
                    </div>
                    <div className={styles.top__menu}>
                        <ul>
                            <li><NavLink to='/profile' className={styles.link}>Профиль</NavLink></li>
                            <li><NavLink to='/friends' className={styles.link}>Список друзей</NavLink></li>
                            <li><NavLink to='/chat' className={styles.link}>Чат</NavLink></li>
                        </ul>
                    </div>

                    <div className={styles.block__top__auth}>
                        <NavLink to='/search'><img src={logo} alt="{logo}"/></NavLink>

                        {props.isAuth ?
                            <p className={styles.topauthbutton}>
                                <NavLink to='' className={`${styles.button} ${styles.login}`}>{props.login}</NavLink>
                            </p>
                            :
                            <p className={styles.topauthbutton}>
                                <NavLink to='' className={`${styles.button} ${styles.login}`}>ВОЙТИ</NavLink>
                            </p>}

                    </div>
                </div>
            </div>
        </header>
    );
}


let HeaderNew = (props) => {
    return (
        <Navbar>
            <NavbarItem path='profile' icon='👽'/>
            <NavbarItem path='chat' icon='💬' />
            <NavbarItem path='friends' icon='💘 '/>
            {props.isAuth ?
                <p className={styles.topauthbutton}>
                    <NavLink to='/profile' className={`${styles.button} ${styles.login}`}>{props.login}</NavLink>
                </p>
                :
                <p className={styles.topauthbutton}>
                    <NavLink to='/login' className={`${styles.button} ${styles.login}`}>ВОЙТИ</NavLink>
                </p>}
        </Navbar>

    )

}

let Navbar = (props) => {
    return ( <>
        <nav className={styles.navbar}>
            <NavbarLogo title='test-project' />
            <ul className={styles.navbarNav}>
                {props.children}
            </ul>
        </nav></>
    )
}
let NavbarItem = (props) => {
    return (
        <li className={styles.navItem}>
            <NavLink to ={`/${props.path}`} className ={styles.iconButton}>
                {props.icon}
            </NavLink>
        </li>
    )
}
let NavbarLogo = (props) => {
    return (
        <span className={styles.navLogo}>
            <NavLink to ={`/`} className={styles.s}>
                {props.title}
            </NavLink>
        </span>
    )
}

export default HeaderNew;