const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_DIALOG_TEXT = 'UPDATE_DIALOG_TEXT'


let store = {

    _state: {
        // Posts Functionality
        postsData: [
            {name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
        ],
        newTexMessage: 'Напиши свой пост тут',


        // Dialogs Functionality
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



    },         // "_" означает, что нельзя глобально использовать state


    subscribe(observer) {
        this.rerenderEntireTree = observer;  // callback функция
    },
    rerenderEntireTree() {
        console.log('sss')
    },               // заглушка для передачи функции
    isBlank() {
        return (this.length === 0 || !this.trim());
    },
    getState() {
        return this._state
    },                         // метод для глобального обращения к state


    dispatch(action) {
        if (action.type === ADD_POST) {
            {
                let newPost = {
                    name: 'Roma',
                    messagePost: this._state.newTexMessage
                }

                if (newPost.messagePost.length === 0 || !newPost.messagePost.trim()) {
                    this.rerenderEntireTree(this._state)
                } else {
                    this._state.postsData.push(newPost)
                    this.rerenderEntireTree(this._state)
                }
                this._state.newTexMessage = ''
            }
        } else if (action.type === UPDATE_POST_TEXT) {
            {

                this._state.newTexMessage = action.postMessage;
                this.rerenderEntireTree(this._state)

            }


        } else if (action.type === ADD_MESSAGE) {


                let newMessage = {
                    name: 'Nikola',
                    id: '',
                    messagePost: this._state.newDialogMessage
                }
            debugger
                if (newMessage.messagePost.length === 0 || !newMessage.messagePost.trim()) {
                    this.rerenderEntireTree(this._state)
                } else {
                    this._state.usersInfo.push(newMessage)
                    this.rerenderEntireTree(this._state)
                }
            this._state.newDialogMessage = ''

            }

        else if (action.type === UPDATE_DIALOG_TEXT) {
            {

                this._state.newDialogMessage = action.dialogMessage;
                this.rerenderEntireTree(this._state);
            }
        }                    //Мы используем dispatch для управления функциями изменяющих UI
    }
}


export const addPostChanger = () => ({type: ADD_POST})
export const addMessageChanger = () => ({type: ADD_MESSAGE})
export const onPostChangeChanger = (t) => ({type: UPDATE_POST_TEXT, postMessage: t})
export const onMessageTextChangeChanger = (t) => ({type: UPDATE_DIALOG_TEXT, dialogMessage:t})

window.store = store;
export default store;