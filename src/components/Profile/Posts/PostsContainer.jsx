import React from 'react';
import {connect} from "react-redux";
import './Posts.module.sass';
import {addPost} from "../../../redux/addPostReducer";
import Post from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.addPostPage.postsData,
    };
};


const PostsContainer =  connect(mapStateToProps, {addPost})(Post);

export default PostsContainer;