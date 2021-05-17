import {Field, reduxForm} from "redux-form";
import styles from "./ChatForm.module.sass"
import sendPic from "../../../assets/img/send.svg";
import React from "react";
import {required} from "../../../utils/validators/validators";
import {reset} from 'redux-form';

const ChatForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={"newMessageBody"}
                   validate={required} placeholder="Введите текст сообщения..."/>
            <button className={styles.button}><img src={sendPic} width={"20em"} alt=""/></button>
        </form>
    )
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('send-message-form'));

const ChatReduxForm = reduxForm({form: 'send-message-form', onSubmitSuccess: afterSubmit})(ChatForm)

export default ChatReduxForm
