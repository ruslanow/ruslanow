import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../../utils/validators/validators";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"input"} name={"postMessage"} validate={required} placeholder="Введите текст сообщения..."/>
            <button>Click Me</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: "posts-form"})(PostForm)

export default PostReduxForm