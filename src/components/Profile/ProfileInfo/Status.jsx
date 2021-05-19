import React, {useEffect, useState} from 'react';
import styles from "./Status.module.sass"

class StatusClass extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div className={styles.statusBox}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                </div>}
                {this.state.editMode &&
                <div className={styles.statusBox}>
                    <input className={styles.input} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                           value={this.state.status} maxLength="50"/>
                </div>}
            </div>
        )
    }
}


const Status = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect( () => {
        setStatus(props.status)
        }, [props.status]
    )

        return (
            <div>
                {!editMode &&
                <div className={styles.statusBox}>
                    <span onDoubleClick={ () => setEditMode(!editMode)}>{props.status || "-------"}</span>
                </div>}
                {editMode &&
                <div className={styles.statusBox}>
                    <input className={styles.input} onChange={onStatusChange} autoFocus={true} onBlur={ () => {
                        setEditMode(!editMode)
                        props.updateStatus(status)
                    }}
                           value={status} maxLength="50"/>
                </div>}
            </div>
        )
}



export default Status;