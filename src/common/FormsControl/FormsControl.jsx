import React from "react";
import styles from "./FormsControl.module.sass"
import {Field} from "redux-form";

export const Textarea = ({input, meta: {error, touched}, ...props}) => {

    const hasError = error && touched

    return (
        <div className={`${styles.input} ${(hasError ? styles.error : "")}`}>
            <textarea {...input} {...props}/>
            {hasError && <span>это обязательное поле*</span>}
        </div>
    )
}
export const Input = ({input, meta: {error, touched}, ...props}) => {

    const hasError = error && touched

    return (
        <div className={`${styles.input} ${(hasError ? styles.error : "")}`}>
            <input {...input} {...props}/>
            {hasError && <span>это обязательное поле*</span>}
        </div>
    )
}


export const fieldComponent = (name, placeholder, component, validate, props = {}, text = "") => (
    <>
        <Field component={component} name={name} placeholder={placeholder} validate={validate} {...props}/>
        {text}
    </>
)
