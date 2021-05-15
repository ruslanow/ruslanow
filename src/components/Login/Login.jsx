import React from "react";
import styles from "./Login.module.sass"
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../common/FormsControl/FormsControl";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



let Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, false)
        console.log(formData.login, formData.password, false)
        console.log(formData)
    }
    if (props.isAuth){
        return <Redirect to='/profile' />
    }

    return (
        <div className={styles.s}>
            <div><h1 className={styles.title}>LOGIN PAGE</h1></div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.form}>
            <div className={`${styles.input}`}>
                <Field component={Input} name={"login"} placeholder={'Введите логин'} validate={required}/>
            </div>
            <div className={`${styles.input}`}>
                <Field component={Input} name={"password"} type={'password'} placeholder={'Введите пароль'} validate={required}/>
            </div>
            { props.error && <div className={styles.summaryError}>
                <span>{props.error}</span>
            </div>}
            <div className={styles.input}>
                <Field className={styles.checkbox} component={"input"} type="checkbox" name={"rememberMe"}/> remember me
            </div>
            <div className=''>
                <button className={styles.button}>Войти</button>
           </div>
        </form>
        
    )

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
}
}

export default connect(mapStateToProps, {login})(Login)
