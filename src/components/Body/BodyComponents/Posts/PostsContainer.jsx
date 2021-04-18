import React from 'react';
import {connect} from "react-redux";
import './Posts.module.sass';
import {addPostChanger, onPostChangeChanger} from "../../../../redux/addPostReducer";
import Post from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.addPostPage.postsData,
        newTexMessage: state.addPostPage.newTexMessage
    };
};
let mapDispatchToProps = (dispatch) => {
    return{
        updatePostText: (t) => {
            dispatch (onPostChangeChanger(t));
        } ,
        addPost: () => {
            dispatch (addPostChanger());
        }
    };
};

const PostsContainer =  connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostsContainer;