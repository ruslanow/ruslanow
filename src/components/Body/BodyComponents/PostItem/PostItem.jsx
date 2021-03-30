import React from 'react';
import styles from './PostItem.module.sass';
import logo from '../../../../assets/img/rocket.png'


let PostItem = (props) => {


    return (
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
    );
};

export default PostItem;