import React from 'react';
import styles from './Body.module.sass';
import RegBox from "./BodyComponents/RegBox/RegBox";
import AboutUs from "./BodyComponents/AboutUs/AboutUs";
import HowItWorks from "./BodyComponents/HowItWorks/HowItWorks";
import Calculator from "./BodyComponents/Calculator/Calculator";
import PostsContainer from "./BodyComponents/Posts/PostsContainer";




let Body = (props) => {


    return (
        <div className={styles.block}>
            <RegBox />

            <AboutUs />
            <HowItWorks />
            <Calculator />
            <PostsContainer store={props.store}  />
         </div>
    );
}

export default Body;