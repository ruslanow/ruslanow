import styles from "./AboutUs.module.sass";
import React from "react";
import logo1 from "./../../../../assets/img/123456.png";
import logo2 from "./../../../../assets/img/agreement.png";
import logo3 from "./../../../../assets/img/file.png";
import logo4 from "./../../../../assets/img/star.png";


let AboutUs = (props) => {
    return (
        <div className={styles.about}>
            <h1>О нас</h1>
            <div className={styles.grid}>
                <div className={styles.box}>
                    <h3 id="about__us__text">Социальная сеть кредитования</h3>
                    <p id="about__us__text">Наш сайт является социальной сетью по выдаче или получению займа под залог
                        недвижимости или авто.</p>
                    <img src={logo1} alt="Иконка" />
                </div>
                <div className={styles.box}>
                    <h3 className="about__us__title">Кредит без банков и поручителей</h3>
                    <p id="about__us__text">Мы выступаем в качестве помошника в чистоте сделки между заемщиком и
                        кредитором, без
                        участия банков.</p>
                    <img src={logo2} alt="Иконка"/>
                </div>
                <div className={styles.box}>
                    <h3 className="about__us__title">Основаная цель данного ресурса</h3>
                    <p id="about__us__text">Это объединение на одной площадке кредиторов и заемщиков для поиска
                        оптимальных
                        кредитных предложений на взаимовыгодных условиях.</p>
                    <img src={logo3} alt="Иконка"/>
                </div>
                <div className={styles.box4}>
                        <div className={styles.x}>
                            <div className={styles.boxH3}>
                                <h3 className="about__us__title">Наши отличительные особенности</h3>
                            </div>
                            <div>
                                <ul>
                                    <li><span>кредитная история не важна</span></li>
                                    <li><span>не трубются финансовые подтверждения о Ваших доходах и деятельности</span>
                                    </li>
                                    <li>
                                        <span>проценты и сумму основного долга можно выплачивать по истечению срока кредита</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img className={styles.pic} src={logo4} alt="Иконка"/>
                </div>
            </div>
        </div>
    );
}


export default AboutUs;
