import React from 'react';
import styles from './Body.module.sass';
import Post from "./BodyComponents/Posts";


let Body = (props) => {
    return (
        <div className={styles.block}>
            <Post posts={props.posts}/>
        </div>
    );
}

export default Body;