import React, {useState} from 'react';


/*const Status = (props) => {

    const [isEdited, setIsEdited] = useState(false)
    const [state, setState] = useState(props.status)

    let StatusRef = React.createRef();

    let onStatusChange = () => {
        let t = StatusRef.current.value;
        setState(t)
    }

    let deactivateEditMode =( ) => {
        setIsEdited(false)
        props.updateStatus(state);
    }


    return (
        <>
            {isEdited
                ? <div>
                    <textarea ref={StatusRef} value={state} onBlur={deactivateEditMode}
                              onChange={onStatusChange} autoFocus={true} placeholder='Введите текст статуса...'/>
                    <button className='btn' onClick={deactivateEditMode}>
                        Save
                    </button>
                </div>
                : <div><span onClick={() => setIsEdited(true)}>{props.status || 'No status'}</span></div>
            }
        </>
    )
}*/


class Status extends React.Component{

    state = {

        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {

        this.setState( {
            editMode: true
        } );
    }
    deactivateEditMode() {
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
     if (prevProps.status !== this.props.status){
         this.setState({
             status: this.props.status
         })
     }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}


export default Status;