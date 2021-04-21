import styles from "../../components/Users/Users.module.sass";
import preloader from "../../assets/preloader.gif";
import React from "react";

export let Preloader = (props) => {

    return (
        <div className={styles.preloader}>
            <img src={preloader} alt=""/>
        </div>
    )
}