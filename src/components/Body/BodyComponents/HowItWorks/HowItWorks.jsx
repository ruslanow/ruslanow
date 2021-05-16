import styles from './HowItWorks.module.sass'
import React from "react";
import './../../../../assets/img/shild.png'

import img1 from './../../../../assets/img/file.png';
import img2 from './../../../../assets/img/shild.png';
import img3 from './../../../../assets/img/scales.png';
import img4 from "./../../../../assets/img/hand.png";
import {NavLink} from "react-router-dom";



let HowItWorks = (props) => {

    return (
        <div>
            <div className={styles.block}>
                <h1>Как это работает</h1>
                <div className={styles.flex}>
                    <ul>
                        <li><NavLink to='/' className={`${styles.link} ${styles.borrower}`}>Заемщик</NavLink></li>
                        <li><NavLink to='/' className={`${styles.link} ${styles.creditor}`}>Кредитор</NavLink></li>
                    </ul>
                </div>
                <div className={styles.body} >
                    <div className={styles.box}>
                        <div className={styles.img1}><img src={img1} alt=''  /></div>
                        <div className={styles.title}>Подача обьявления</div>
                        <div className={styles.text}>Вы подаете обьявление с запросом на кредит на нашем сайте
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.img2}><img src={img2} alt='' /></div>
                        <div className={styles.title}>Одобрение</div>
                        <div className={styles.text}>Мы проверяем все ваши данные и одобряем ваше обьявление
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.img3}><img src={img3} alt=''   /></div>
                        <div className={styles.title}>Выбор</div>
                        <div className={styles.text}>Выбираете выгодное для себя предложение</div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.img4}><img src={img4} alt=''  /></div>
                        <div className={styles.title}>Получение</div>
                        <div className={styles.text}>Получаете деньги удобным способом</div>
                    </div>
                </div>
                <div className={styles.body2}>
                    <div className={styles.box}>
                        <div className={styles.img1}><img src={img1} alt=''   /></div>
                        <div className={styles.title}>Текст</div>
                        <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam
                            neque, consectetur sunt quidem quae commodi facilis excepturi et quia.
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.img2}><img src={img2} alt=''   /></div>
                        <div className={styles.title}>Одобрение</div>
                        <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum,
                            nulla, quibusdam! Quia, obcaecati ab reprehenderi
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.img3}><img src={img3} alt=''   /></div>
                        <div className={styles.title}>Выбор</div>
                        <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum,
                            nulla, quibusdam! Quia, o
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.img4}><img src={img4} alt=''/></div>
                        <div className={styles.title}>Получение</div>
                        <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum,
                            nulla, quibusdam! Quia, o
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    };





export default HowItWorks;

