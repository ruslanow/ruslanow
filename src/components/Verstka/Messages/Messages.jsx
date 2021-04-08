import React from 'react';
import styles from './Messages.module.sass';
import {NavLink} from "react-router-dom";





let Messages = (props) => {

    let newMessage = props.state.usersInfo
        .map(p => <MessageItem message={p.messagePost}/>);


    return (
        <div className={styles.messages}>
            {newMessage}
        </div>
    );
}

export default Messages;