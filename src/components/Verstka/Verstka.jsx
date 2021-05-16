import React from "react";
import styles from "./Verstka.module.sass"
import {NavLink} from "react-router-dom";

let Navbar = (props) => {
    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
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

const Body = (props) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <div>
                    <h1 className={styles.logoWhite}>Study </h1>
                    <h1 className={styles.logoBlue}> > Moov </h1>
                </div>
                <div>
                    <span>Образование в Австрии</span>
                </div>
            </div>
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li><span>+7 495 284-44-23</span></li>
                        <li><button>Обратный звонок</button></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}