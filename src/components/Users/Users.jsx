import React from 'react';
import './Users.module.sass';
import styles from "./Users.module.sass";
import userPhoto from '../../assets/user.png';
import {Preloader} from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";
import {User} from "./User";


let Users = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className='container'>

                <div className={styles.title}>Profiles Page</div>

                <div className={styles.navPages}>
                    <Paginator totalCount={props.totalCount} pageSize={props.pageSize} pageNumber={props.pageNumber}
                               onPageChange={props.onPageChange}/>
                </div>

                {props.isFetching ? <Preloader/> : null}

                {props.users.map(p => <User id={p.id}
                                            photos={p.photos}
                                            followed={p.followed}
                                            followInProgress={props.followInProgress}
                                            name={p.name}
                                            status={p.status}
                                            follow={props.follow}
                                            unfollow={props.unfollow}/>
                )}
            </div>
        </div>
    )
}


export default Users;