import React from "react";
import styles from "./FormsControl.module.sass"

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched

    return (
        <div className={`${styles.input} ${(hasError ? styles.error : "")}`}>
            <textarea {...input} {...props}/>
            { hasError && <span>это обязательное поле*</span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched

    return (
        <div className={`${styles.input} ${(hasError ? styles.error : "")}`}>
            <input {...input} {...props}/>
            { hasError && <span>это обязательное поле*</span>}
        </div>
    )
}