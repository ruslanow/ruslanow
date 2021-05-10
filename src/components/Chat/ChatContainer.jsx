import React from 'react';
import {addMessage} from "../../redux/addMessageReducer";
import {connect} from "react-redux";
import ChatPage from "./Chat";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ChatContainer extends React.Component {


    render() {
        return <ChatPage {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        usersMessages: state.dialogsPage.usersMessages,
        usersData: state.dialogsPage.usersData,
        newDialogMessage: state.dialogsPage.newDialogMessage,
    }
};


export default compose (
    connect(mapStateToProps, {addMessage}),
    withRouter,
    withAuthRedirect
)(ChatContainer)