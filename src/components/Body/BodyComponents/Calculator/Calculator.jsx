import styles from './Calculator.module.sass'
import React from "react";
import {NavLink} from "react-router-dom";


let Calculator = (props) => {

    return (
    <div>
        <div className={styles.body}>
            <div className={styles.calculator}>
                <h1>Кредитный калькулятор</h1>
                <div className={styles.box}>
                    <span className={styles.howMuch}>Сколько Вам нужно</span>
                    <span className={styles.number}>30000</span>
                </div>
                <input type="range" min="30000" max="5000000" step="10000" value="30000"
                       className="slider"
                       id="how-much-you-need"/>
                    <div className="credit-box__under-case">
                        <span id="from">от 30 000</span>
                        <span id="for">до 5 000 000</span>
                    </div>
                    <div className="credit-box">
                        <span id="how-much">Срок кредита</span>
                        <span className="creditorTime" id="how-much__number_pop">3 месяца</span>
                    </div>
                    <div className="calculator-slider">
                        <input type="range" min="1" max="12" step="1" value="1"
                               className="slider" id="for-how-long"/>
                    </div>
                    <div className="credit-box__under-case">
                        <span id="from">от 3 месяцев</span>
                        <span id="for">до 3 лет</span>
                    </div>
                    <span>Предварительный расчет. Не является публичной офертой.</span>
            </div>
            <div className="calculation">
                <div id="calculation-box">
                    <h1>Ставка</h1>
                    <h2 id="calculation-box__right-text">от 6,5%</h2>
                </div>
                <div id="calculation-box">
                    <h1>Ежемесячный платеж</h1>
                    <h2 id="calculation-box__right-text s" >4 400р</h2>
                </div>
                <div className="button-calculator">
                    <NavLink to='/' id='button-calculator-btn'>Оформить онлайн</NavLink>
                </div>
            </div>
        </div>
    </div>
        );
    };






export default Calculator;

