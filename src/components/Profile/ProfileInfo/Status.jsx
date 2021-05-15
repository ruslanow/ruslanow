import React from 'react';
import styles from "./Status.module.sass"

class Status extends React.Component {

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


export default Status;