import React from 'react';
import {addMessageChanger, onMessageTextChangeChanger} from "../../redux/addMessageReducer";
import {connect} from "react-redux";
import ChatPage from "./Verstka";


// let SomePageContainer = (props) => {
//
//     let onMessageChange = (t) => {
//         let action = onMessageTextChangeChanger(t)
//         props.store.dispatch(action)
//     }
//
//     let addPost = () => {
//         let action = addMessageChanger()
//         props.store.dispatch(action)
//     }
//
//     return <SomePage onMessageChange = {onMessageChange}
//                      addPost = {addPost}
//                      usersInfo={props.store.getState().dialogsPage.usersInfo}
//                      usersData ={props.store.getState().dialogsPage.usersData}
//                      newDialogMessage = {props.store.getState().dialogsPage.newDialogMessage}/>
// };


let mapStateToProps = (state) => {
    return {
        usersInfo: state.dialogsPage.usersInfo,
        usersData: state.dialogsPage.usersData,
        newDialogMessage: state.dialogsPage.newDialogMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onMessageChange: (t) => {
            dispatch (onMessageTextChangeChanger(t));
        },
        addPost: () => {
            dispatch(addMessageChanger());
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatPage)


export default ChatContainer;
