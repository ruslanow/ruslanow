import React from 'react';
import styles from './Verstka.module.sass';

import l7 from './../../assets/img/Verstka/bottomPic.svg';
import cloud from './../../assets/img/Verstka/cloud.svg';

import {NavLink} from 'react-router-dom';
import {addMessageChanger, onMessageTextChangeChanger} from "../../redux/addMessageReducer";
import Friends from "./Friends/Friends";


let MessageItem = (props) => {
    return (
        <div>
            <div className={styles.message}>
                <div className={styles.userName}>
                    <img src={l7} height='35px' alt=""/>
                    <h2>{props.name}</h2>
                </div>
                <h3>{props.message}</h3>
            </div>
        </div>
    )
}


let SomePage = (props) => {


    let newMessage = props.state.dialogsPage.usersInfo
        .map(p => <MessageItem message={p.messagePost} name={p.name}/>);


    let onMessageChange = () => {
        let t = messageRef.current.value;
        props.dispatch(onMessageTextChangeChanger(t));
    }

    let messageRef =
        React.createRef();


    let addPost = () => {
        props.dispatch(addMessageChanger())

    }
    let FriendsList = props.state.dialogsPage.usersData.map(p => <Friends name={p.name} id={p.id}/>)

    return (


        <div className={styles.intro}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.navigate}>
                        <div className={styles.navigate__top}>
                            <img src={cloud} alt=""/> <span>cloudcash</span>
                        </div>

                        <div className={styles.friends}>
                            {FriendsList}

                            <div className={styles.friends_bottom}>
                                <div>
                                    <img src={l7} height='108px' alt=""/></div>
                                <div>
                                    <h4>Give your money
                                        awesome space in cloud</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menu}>
                            <div className={styles.dialog}>
                                <div className={styles.dialogsHead}>Dialogs Page</div>
                            </div>
                    </div>

                    <div className={styles.content}>

                        <div className={styles.messages}>
                            {newMessage}
                        </div>
                        <div className={styles.textarea}>
                            <textarea onChange={onMessageChange} value={props.state.dialogsPage.newDialogMessage}
                                      ref={messageRef} placeholder="Введите текст сообщения..."/>
                            <button onClick={addPost}>  Send  </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SomePage;