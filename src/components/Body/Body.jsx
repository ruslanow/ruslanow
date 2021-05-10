import React from 'react';
import styles from './Body.module.sass';
import RegBox from "./BodyComponents/RegBox/RegBox";
import AboutUs from "./BodyComponents/AboutUs/AboutUs";
import HowItWorks from "./BodyComponents/HowItWorks/HowItWorks";
import Calculator from "./BodyComponents/Calculator/Calculator";




let Body = (props) => {


    return (
        <div className={styles.block}>
            <RegBox />

            <AboutUs />
            <HowItWorks />
            <Calculator />
         </div>
    );
}

export default Body;