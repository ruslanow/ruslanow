import React from 'react';
import './Posts.module.sass';
// import PostItem from "./PostItem/PostItem";
import styles from "./PostItem/PostItem.module.sass";
import logo from "../../../assets/img/rocket.png";
// import PostItem from "./PostItem/PostItem";

const PostItem = (props) => {

    return (
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
    );
};



const Post = (props) => {


    let postElement = props.postsData
      .map( p => <PostItem name={p.name} messagePost={p.messagePost} />);

    return(
        <div>
            {postElement}
        </div>
    )
}

export default Post;