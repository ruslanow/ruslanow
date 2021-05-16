import React from 'react';
import './Posts.module.sass';
import styles from "./Posts.module.sass";
import logo from "../../../assets/img/rocket.png";
import PostReduxForm from "./PostForm/PostForm";


const PostItem = (props) => {
    return (
        <div key={props.id}>
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

const Post = React.memo(props => {

    let postElement = props.postsData
        .map(p => <PostItem name={p.name} key={p.id} id={p.id} messagePost={p.messagePost}/>);

    let addPost = (values) => {
        props.addPost(values.postMessage)
    }

    return (
        <div key={props.id}>
            <div className={styles.addPost}>
                <PostReduxForm onSubmit={addPost} />
            </div>
            {postElement}
        </div>
    )
})

export default Post;