import React from 'react';
import './Posts.module.sass';
import styles from "./Posts.module.sass";
import logo from "../../../../assets/img/rocket.png";
import {addPostChanger, onPostChangeChanger} from "../../../../redux/addPostReducer";
import Post from "./Posts";

const PostItem = (props) => {

    return (
        <div>
            <div className={styles.block}>
                <div className={styles.profileInfo}>
                    <img src={logo} width="40px" height="40px" alt=""/>
                    <div className={styles.name}>
                        <h2>{props.name}</h2>
                    </div>
                </div>
                <div className={styles.message}>
                    <h3>{props.messagePost}</h3>
                </div>
            </div>
        </div>
    );
};



const PostsComponent = (props) => {

    let onPostChange = (t) => {
        let action = onPostChangeChanger(t)
        props.store.dispatch (action);
    };

    let addPost = () => {
        let action = addPostChanger()
        props.store.dispatch (action)
    };

    debugger
    return (

        <Post updatePostText = {onPostChange} addPost = {addPost} postsData = {props.store.getState().addPostPage.postsData} />
    )

};

export default PostsComponent;