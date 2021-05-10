import React from "react";
import styles from "./Login.module.sass"
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";



let Login = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={styles.s}>
            <div><h1>LOGIN PAGE</h1></div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <Field component={"input"} name={"login"} placeholder={'Введите логин'} validate={required}/>
            </div>
            <div className="">
                <Field component={"input"} name={"Password"} placeholder={'Введите пароль'} validate={required}/>
            </div>
            <div className="">
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div className="">
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login
