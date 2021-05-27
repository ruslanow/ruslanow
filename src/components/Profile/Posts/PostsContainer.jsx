import {connect} from "react-redux";
import './Posts.module.sass';
import Post from "./Posts";
import {addPost} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.posts,
    };
};


const PostsContainer =  connect(mapStateToProps, {addPost})(Post);

export default PostsContainer;