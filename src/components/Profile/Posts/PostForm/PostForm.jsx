import React from "react";
import styles from "./PostForm.module.sass"
import {Field, reduxForm, reset} from "redux-form";
import sendPic from "../../../../../src/assets/img/send.svg"
import {maxLength, required} from "../../../../utils/validators/validators";

const maxLength200 = maxLength(200)

const PostForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={"postMessage"} placeholder="Введите текст сообщения..." validate={[required, maxLength200]}/>
            <button className={styles.button}><img src={sendPic} width={"20em"} alt=""/></button>
        </form>
    )
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('posts-form'));

const PostReduxForm = reduxForm({form: "posts-form", onSubmitSuccess: afterSubmit})(PostForm)

export default PostReduxForm