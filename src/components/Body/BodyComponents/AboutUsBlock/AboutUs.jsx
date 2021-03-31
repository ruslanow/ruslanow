import styles from "./AboutUs.module.sass";
import React from "react";
import logo from './../../../../assets/img/123.png'
import {NavLink} from "react-router-dom";

let AboutUs = (props) => {
    return (
            <div className={styles.intro}>
                <h1> Кредиты под залог имущества </h1>
                <div className={styles.boxes}>
                    <div className={styles.box1}>
                        <h2>Кредитор</h2>
                        <p>Категория пользователей, осуществляющая действия с целью получения
                            кредита (займа) под залог движимого или недвижимого имущества.</p>
                        <p id={styles.button}><NavLink className={styles.button1}  to='/registration/creditor'>Зарегистрироваться</NavLink></p>
                    </div>
                    <div className={styles.box2}>
                        <h2>Заемщик</h2>
                        <p> Категория пользователей, осуществляющая выдачу кредита (займа) под залог
                            движимого или недвижимого имущества.</p>
                        <p className={styles.button}><NavLink className={styles.button2}  to='/registration/borrower'>Зарегистрироваться</NavLink></p>
                    </div>
                </div>
            </div>
    );
}



export default AboutUs;