import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.sass'
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div className={styles.wrapper}>
            <ProfileInfo status={props.status} profile={props.profile} updateStatus={props.updateStatus} updateUserStatus={props.updateUserStatus}/>
{/*
            <PostsContainer store={props.store}/>
*/}
        </div>
    )
}
export default Profile;