import styles from "./Users.module.sass";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/user.png";
import React from "react";

export const User = (props) => {
    return (
        <div key={props.id}>
            <div className={styles.box}>
                <div className={styles.user}>
                    <div className={styles.imgContainer}>
                        <NavLink to={'/profile/' + props.id}>
                            <img src={props.photos.small != null ? props.photos.small : userPhoto} width='70em'
                                 alt=""/>
                        </NavLink>
                    </div>
                    <div className={styles.buttonContainer}>
                        {props.followed
                            ? <button disabled={props.followInProgress.some(id => id === props.id)} onClick={() => {props.unfollow(props.id)} }>
                                unfollow
                            </button>
                            : <button disabled={props.followInProgress.some(id => id === props.id)} onClick={() => {props.follow(props.id)}}>
                                follow
                            </button>
                        }
                    </div>
                </div>
                <div className={styles.status}>
                    <div className={styles.userName}>
                        <h2>{props.name}</h2>
                    </div>
                    <div className={styles.statusContainer}>
                        <span>{props.status}</span>
                    </div>
                    <div className={styles.locationContainer}>
                        <span>{/*"{props.location.country}, {props.location.city}"*/}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}