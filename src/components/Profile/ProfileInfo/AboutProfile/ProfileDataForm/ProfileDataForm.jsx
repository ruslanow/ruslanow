import styles from './ProfileDataForm.module.sass'
import {fieldComponent, Input, Textarea} from "../../../../../common/FormsControl/FormsControl";
import React from "react";
import {reduxForm} from "redux-form";

import { withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);
const Switcher = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return(
        <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Нет</Grid>
                <Grid item>
                    <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                </Grid>
                <Grid item>Да</Grid>
            </Grid>
        </Typography>
    )
}


const ProfileDataForm = ({handleSubmit, profile }) => {

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.editButton}>
                <button>Изменить информацию</button>
            </div>
            <p>Полное имя:</p> {fieldComponent("fullName", "Имя", Input, [])}
            <div><p>Ищу работу:</p> {fieldComponent("lookingForAJob", "", Input, [], {type: "checkbox"} )} </div>
            <p>Профессиональный навыки:</p> {fieldComponent("lookingForAJobDescription", "Профессианальные навыки", Input, [])}
            <p>Обо мне:</p> {fieldComponent("aboutMe", "Обо мне", Input, [])}
            <p>Контакты:</p> {Object.keys(profile.contacts).map(key =>
            <p>{key}: {fieldComponent("contacts."+key, key, Input, [])}</p>
        )}
        </form>
    )
}



const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm





