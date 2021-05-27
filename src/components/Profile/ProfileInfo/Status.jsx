import React, {useEffect, useState} from 'react';
import styles from "./Status.module.sass"

const Status = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]
    )

    return (
        <>
            {!editMode &&
            <div className={styles.statusBox}>
                <span className={`${styles.input} ${styles.status}`} onClick={() => {
                    props.isOwner && setEditMode(!editMode)
                }}>{props.status || "-------"}</span>
            </div>}
            { editMode
            ?   <div className={styles.statusBox}>
                    <input className={styles.input} onChange={onStatusChange} autoFocus={true} onBlur={() => {
                       setEditMode(!editMode)
                      props.updateStatus(status)
                  }}
                       value={status} maxLength="50"/>
                </div>
            : null
            }
        </>
    )
}

export default Status;