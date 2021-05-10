import React from 'react';
import styles from './Chat.module.sass';
import l7 from './../../assets/img/Verstka/bottomPic.svg';
import l8 from './../../assets/img/Verstka/logo.png';
import cloud from './../../assets/img/Verstka/cloud.svg';
import Friends from "./Friends/Friends";
import ChatReduxForm from "./ChatForm/ChatForm";


let MessageItem = (props) => {
    return (
        <div>
            <div className={styles.messageItem}>
                <div className={styles.userName}>
                    <img src={l8} height='35px' alt=""/>
                    <h2>{props.name}</h2>
                </div>
                <h3>{props.message}</h3>
            </div>
        </div>
    )
}

let ChatPage = (props) => {

    let messages = props.usersMessages
        .map(p => <MessageItem message={p.messagePost} key={p.id} name={p.name}/>);


    let addMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }
    let FriendsList = props.usersData.map(p => <Friends name={p.name} key={p.id} id={p.id}/>)

    return (
        <div className={styles.intro}>
            <div className="container">
                <div className={styles.body}>

                    {/*СПИСОК ДРУЗЕЙ*/}

                    <div className={styles.navigate}>
                        <div className={styles.navigate__top}>
                            <img src={cloud} alt=""/> <h2 className='font-weight-bold'>Чат</h2>
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

                    {/*ВЕРХНЯЯ НАДПИСЬ*/}

                    <div className={styles.menu}>
                        <div className={styles.dialog}>
                            <div className={styles.dialogsHead}>Dialogs Page</div>
                        </div>
                    </div>

                    {/*КОНТЕНТ*/}

                    <div className={styles.content}>

                        <div className={styles.messages}>
                            {messages}
                        </div>
                        <div className={styles.textarea}>
                            <ChatReduxForm onSubmit={addMessage}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChatPage;