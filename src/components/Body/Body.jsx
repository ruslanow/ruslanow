import React from 'react';
import styles from './Body.module.sass';
import Post from "./BodyComponents/Posts/Posts";
import RegBox from "./BodyComponents/RegBox/RegBox";
import AboutUs from "./BodyComponents/AboutUs/AboutUs";


let Body = (props) => {
    return (
        <div className={styles.block}>
            <RegBox />
            <Post postsData={props.postsData}/>
            <AboutUs />

         </div>
    );
}

export default Body;