import React from 'react';
import styles from './Header.module.sass';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


let Header = (props) => {
    return (
        <Navbar>
            <NavbarItem path='profile' icon='👽'/>
            <NavbarItem path='chat' icon='💬'/>
            <NavbarItem path='friends' icon='💘 '/>
            {props.isAuth
                ? <div className={styles.buttonsContainer}>
                    <p className={styles.topauthbutton}>
                        <NavLink to='/profile' className={`${styles.button} ${styles.login}`}>{props.login}</NavLink>
                    </p>
                    <p className={styles.topauthbutton}>
                        <button className={`${styles.logout}`} onClick={props.logout}>Logout</button>
                    </p>
                </div>
                : <li className={styles.liquidNavItem}>
                    <NavLink className = {styles.liquidLink} to='/login'>
                        <span>login</span>
                        <div className={styles.liquid}></div>
                    </NavLink>
                 </li>
            }
        </Navbar>
    )
}

let Navbar = (props) => {
    return (<div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <NavbarLogo title='test-project'/>
                <ul className={styles.navbarNav}>
                    {props.children}
                </ul>
            </nav>
        </div>
    )
}
let NavbarItem = (props) => {
    return (
        <li className={styles.navItem}>
            <NavLink to={`/${props.path}`} className={styles.iconButton}>
                {props.icon}
            </NavLink>
        </li>
    )
}
let NavbarLogo = (props) => {
    return (
        <span className={styles.navLogo}>
            <NavLink to={`/`} className={styles.s}>
                {props.title}
            </NavLink>
        </span>
    )
}

export default connect(null, {logout})(Header);
