import React from 'react';
import styles from './Body.module.sass';
import Post from "./BodyComponents/Posts/Posts";
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
            <Post postsData={props.state.postsData}
                  newTexMessage={props.state.newTexMessage}
                  dispatch = {props.dispatch} />
         </div>
    );
}

export default Body;