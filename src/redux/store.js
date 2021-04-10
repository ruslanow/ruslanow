import addPostReducer from "./addPostReducer";
import addMessageReducer from "./addMessageReducer";

let store = {

    _state: {
        addPostPage: {
            // Posts Functionality
            postsData: [
                {name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
            ],
            newTexMessage: '',
        },
        dialogsPage: {
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
        },
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;  // callback функция
    },

    rerenderEntireTree() {
        console.log('sss')
    },

    isBlank() {
        return (this.length === 0 || !this.trim());
    },

    getState() {
        return this._state
    },    // метод для глобального обращения к state

    dispatch(action) {

        this._state.addPostPage = addPostReducer(this._state.addPostPage, action);
        this._state.dialogsPage = addMessageReducer(this._state.dialogsPage, action);

        this.rerenderEntireTree(this._state);
    }
}

window.store = store;
export default store;