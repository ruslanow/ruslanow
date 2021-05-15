import React from 'react';
import './Users.module.sass';
import styles from "./Users.module.sass";
import userPhoto from '../../assets/user.png';
import {Preloader} from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let totalPageCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for (let i = 1; totalPageCount >= i; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.wrapper}>
            <div className='container'>
                <div className={styles.title}>Profiles Page</div>

                <div className={styles.navPages}>
                    {pages.map(p => {
                        return <span className=
                                         {props.pageNumber === p ? styles.selectedPage : styles.page}
                                     onClick={(e) => {
                                         props.onPageChange(p)
                                     }}> {p} </span>
                    })}
                </div>

                {props.isFetching ? <Preloader/> : null}

                {props.users.map(p =>
                    <div key={p.id}>

                        <div className={styles.box}>
                            <div className={styles.user}>
                                <div className={styles.imgContainer}>
                                    <NavLink to={'/profile/' + p.id}>
                                        <img src={p.photos.small != null ? p.photos.small : userPhoto} width='70em'
                                             alt=""/>
                                    </NavLink>
                                </div>
                                <div className={styles.buttonContainer}>
                                    {p.followed

                                        ? <button disabled={props.followInProgress.some(id => id === p.id)} onClick={() => {props.unfollow(p.id)} }>
                                            unfollow
                                        </button>
                                        : <button disabled={props.followInProgress.some(id => id === p.id)} onClick={() => {props.follow(p.id)}}>
                                            follow
                                        </button>
                                    }
                                </div>
                            </div>
                            <div className={styles.status}>
                                <div className={styles.userName}>
                                    <h2>{p.name}</h2>
                                </div>
                                <div className={styles.statusContainer}>
                                    <span>{p.status}</span>
                                </div>
                                <div className={styles.locationContainer}>
                                    <span>{/*"{p.location.country}, {p.location.city}"*/}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Users;