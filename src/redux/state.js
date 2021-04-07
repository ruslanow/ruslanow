const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_DIALOG_TEXT = 'UPDATE_DIALOG_TEXT'


let store = {

    _state: {
        postsData: [
            {name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
        ],
        newTexMessage: 'Напиши свой пост тут',
        usersInfo: [
            {name: 'Nikola', id: '', messagePost: 'Its just test message'}
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
                    messagePost: this._state.newDialogMessage
                }

                if (newMessage.messagePost.length === 0 || !newMessage.messagePost.trim()) {
                    this.rerenderEntireTree(this._state)
                } else {
                    this._state.usersInfo.push(newMessage) 
                    this.rerenderEntireTree(this._state)
                }
                this._state.newTexMessage = ''
            }
        else if (action.type === UPDATE_DIALOG_TEXT) {
            {

                this._state.newDialogMessage = action.dialogMessage;
                this.rerenderEntireTree(this._state)

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