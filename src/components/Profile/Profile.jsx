import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.sass'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.wrapper}>
            <ProfileInfo profile={props.profile} />
{/*
            <MyPostsContainer />
*/}
        </div>
    )
}

export default Profile;