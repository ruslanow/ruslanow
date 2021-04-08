import React from 'react';
import styles from './Friends.module.sass';
import {NavLink} from "react-router-dom";





let Friends = (props) => {


    return (
        <div className={styles.navigate__element}>
            <NavLink to={`/help/${props.id}`} className={styles.href} activeClassName={styles.active}>
                <span className={styles.href} >{props.name}</span></NavLink>
        </div>
    );
}

export default Friends;