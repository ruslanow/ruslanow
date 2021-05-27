import styles from "../ProfileInfo.module.sass";
import React, {useState} from "react";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {fieldComponent, Input} from "../../../../common/FormsControl/FormsControl";

const Contact = ({contactTitle, contactValue}) => {
    return <p>{contactTitle}: {contactValue}</p>
}

const AboutProfile = ({profile, isOwner, saveData}) => {
    const [editMode, setEditMode] = useState(false)

    const onSubmit = (formData) => {
        saveData(formData)
        setEditMode(false)
    }


    return (
        <div className={styles.aboutMe}>
            <details>
                <summary className={styles.summaryButton}>Показать подробную информацию</summary>
                {profile && !editMode ? <ProfileData profile={profile} setEditMode={setEditMode} isOwner={isOwner}/> : null}
                {profile && editMode ? <ProfileDataForm initialValues={profile} profile={profile} setEditMode={setEditMode} onSubmit={onSubmit} saveData={saveData}/> : null}
            </details>
        </div>
    )
}



const ProfileData = ({profile, setEditMode, isOwner}) => {
    return <>
        { isOwner && <div className={styles.editButton}>
            <button onClick={() => setEditMode(true)}>Изменить информацию</button>
        </div>}
        <p>Полное имя:</p> {profile.fullName}
        <p>Ищу работу:</p> {profile.lookingForAJob ? 'да' : 'нет'}
        <p>Профессиональный навыки:</p> {profile.lookingForAJobDescription}
        <p>Обо мне:</p> {profile.aboutMe}
        <p>Контакты:</p> {Object.keys(profile.contacts).map(key =>
            <div key = { key } className={styles.contacts}><Contact key={key} contactTitle={key}
                                                      contactValue={profile.contacts[key]}/>
            </div>
        )}
    </>
}

export default AboutProfile
