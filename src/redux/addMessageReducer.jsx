const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_DIALOG_TEXT = 'UPDATE_DIALOG_TEXT'


let initialState = {

    usersData: [
        {name: 'Yana Y.', id: '1'},
        {name: 'Pedro T', id: '2'},
        {name: 'Vika M.', id: '3'},
        {name: 'Egor L.', id: '4'},
        {name: 'Nikita G.', id: '5'},
        {name: 'Liza O.', id: '6'},
        {name: 'Olya K.', id: '7'},

    ],
    usersInfo: [
        {name: 'Nikola', id: '', messagePost: 'It test message'},
        {name: 'Nikola', id: '', messagePost: 'It test message'},
        {name: 'Nikola', id: '', messagePost: 'It test message'},
    ],
    newDialogMessage: ''

}

const addMessageReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE: {
            let newMessage = {
                name: 'Nikola',
                id: '1',
                messagePost: state.newDialogMessage
            }
            if (newMessage.messagePost.length === 0 || !newMessage.messagePost.trim()) {
                return  {...state}
            } else {
                return {
                    ...state,
                    newDialogMessage: '',
                    usersInfo: [...state.usersInfo, newMessage]}
            }
        }

        case UPDATE_DIALOG_TEXT: {
            return{
                ...state,
                newDialogMessage: action.dialogMessage}
        }
        default:
            return state;
    }
}

export default addMessageReducer;
export const addMessageChanger = () => ({type: ADD_MESSAGE})
export const onMessageTextChangeChanger = (t) => ({type: UPDATE_DIALOG_TEXT, dialogMessage: t})


/*
if (newMessage.messagePost.length === 0 || !newMessage.messagePost.trim()) {
    this.rerenderEntireTree(this._state)
} else {
    this._state.usersInfo.push(newMessage)
    this.rerenderEntireTree(this._state)
}
this._state.newDialogMessage = ''
return state;
}
*/
