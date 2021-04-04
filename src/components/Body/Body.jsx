import React from 'react';
import styles from './Body.module.sass';
import Post from "./BodyComponents/Posts/Posts";
import RegBox from "./BodyComponents/RegBox/RegBox";
import AboutUs from "./BodyComponents/AboutUs/AboutUs";
import HowItWorks from "./BodyComponents/HowItWorks/HowItWorks";


let Body = (props) => {


    return (
        <div className={styles.block}>
            <RegBox />

            <AboutUs />
            <HowItWorks />
            <Post postsData={props.state.postsData}
                  addPost = {props.addPost}
                  newTexMessage={props.state.newTexMessage}
                  updatePostText = {props.updatePostText}
            />

         </div>
    );
}

export default Body;