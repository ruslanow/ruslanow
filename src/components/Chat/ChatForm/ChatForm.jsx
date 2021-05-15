import {Field, reduxForm} from "redux-form";
import styles from "./ChatForm.module.sass"
import sendPic from "../../../assets/img/send.svg";
import React from "react";

const ChatForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={"newMessageBody"} placeholder="Введите текст сообщения..."/>
            <button className={styles.button}><img src={sendPic} width={"20em"} alt=""/></button>
        </form>
    )
}

const ChatReduxForm = reduxForm({form: 'send-message-form'})(ChatForm)

export default ChatReduxForm
