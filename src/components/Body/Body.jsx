import React from 'react';
import styles from './Body.module.sass';
import Post from "./BodyComponents/Posts";
import AboutUs from "./BodyComponents/AboutUsBlock/AboutUs";


let Body = (props) => {
    return (
        <div className={styles.block}>
            <AboutUs />
            <Post postsData={props.postsData}/>

         </div>
    );
}

export default Body;