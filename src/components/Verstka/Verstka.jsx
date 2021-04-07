import React from 'react';
import styles from './Verstka.module.sass';

import l7 from './../../assets/img/Verstka/bottomPic.svg';
import cloud from './../../assets/img/Verstka/cloud.svg';

import {NavLink} from 'react-router-dom';
import {addMessageChanger   , onMessageTextChangeChanger} from "../../redux/state";


let MessageItem = (props) => {
    return (
        <div>
            <div className={styles.message}>
                <h3>{props.message}</h3>
            </div>
        </div>
    )
}


let SomePage = (props) => {

    debugger

    let newMessage = props.state.usersInfo
        .map(p => <MessageItem message={p.messagePost}/>);


        let onMessageChange = () => {
            let t = messageRef.current.value;
            props.dispatch(onMessageTextChangeChanger(t));
        }

    let messageRef = () => {
        React.createRef();
    }


    let addPost = () => {
        props.dispatch (addMessageChanger())
    }

    return (

        <div className={styles.intro}>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.navigate}>
                        <div className={styles.navigate__top}>
                            <img src={cloud} alt=""/> <span>cloudcash</span>
                        </div>

                        <div className={styles.navigate__menu}>


                            <div className={styles.navigate__element}>
                                <NavLink to='/help/1' className={styles.href}>
                                    <span className={styles.active}>Overview</span></NavLink>
                            </div>
                            <div className={styles.navigate__element}>
                                <NavLink to='/help/2' className={styles.href}> <span>Transaction</span></NavLink>
                            </div>
                            <div className={styles.navigate__element}>
                                <NavLink to='/help/3' className={styles.href}> <span>Cards</span></NavLink>
                            </div>
                            <div className={styles.navigate__element}>
                                <NavLink to='/help/4' className={styles.href}> <span>Invoices</span></NavLink>
                            </div>
                            <div className={styles.navigate__element}>
                                <NavLink to='/help/5' className={styles.href}> <span>Goals</span></NavLink>
                            </div>
                            <div className={styles.navigate__element}>
                                <NavLink to='/help/6' className={styles.href}> <span>Settings</span></NavLink>
                            </div>

                            <div className={styles.navigate__menu_bottom}>
                                <div className={styles.navigate__menu_pic}>
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
                        <div className={styles.textarea}><textarea onChange={onMessageChange} value={props.state.newDialogMessage}
                                                                   ref={messageRef} cols="30" rows="10"></textarea></div>
                        <button onClick={addPost}>Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SomePage;