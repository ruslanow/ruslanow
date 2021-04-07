import React from 'react';
import './Posts.module.sass';
// import PostItem from "./PostItem/PostItem";
import styles from "./Posts.module.sass";
import logo from "../../../../assets/img/rocket.png";
import {addPostChanger, onPostChangeChanger} from "../../../../redux/state";

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



const Post = (props) => {
    let postElement = props.postsData
        .map(p => <PostItem name={p.name} messagePost={p.messagePost}/>);

    let newPostElement =
        React.createRef();



    let onPostChange = () => {
        let t = newPostElement.current.value;
        props.dispatch (onPostChangeChanger(t));
    }

    let addPost = () => {
        props.dispatch (addPostChanger())
    }

    return (
        <div>
            <div className={styles.addPost}>
                <textarea ref={newPostElement} value={props.newTexMessage} onChange={onPostChange}/>
                <button onClick={addPost}>Click Me</button>
            </div>
            {postElement}
        </div>
    )
}

{/*onChange={} ref={} value={} className={} */
}

export default Post;