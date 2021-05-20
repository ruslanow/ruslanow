import React from 'react';
import styles from './ProfileInfo.module.sass';
import Status from './Status.jsx'

const ProfileInfo = (props) => {
    return (

        <div className={styles.wrapper}>
            <div className={styles.descriptionBlock}>
                <div>
                    {props.profile && props.profile.photos.large
                        ? <img className={styles.logo} src={props.profile.photos.large} alt='' />
                        : <img className={styles.logo} src='https://im0-tub-ru.yandex.net/i?id=874d9d12842361ad716539e4d766353b&n=13' alt=""/>}
                </div>
                <div className={styles.profileInfo}>
                    {props.profile ? <span className={styles.name}>{props.profile.fullName}</span> : null}
                    <Status status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div>
                <img className={styles.wallpaper} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt=''/>
            </div>
        </div>
    )
}

export default ProfileInfo;