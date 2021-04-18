
const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'


let initialState = {
        // Posts Functionality
        postsData: [
            {name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
        ],
        newTexMessage: '',
    }


const addPostReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: 'Roma',
                messagePost: state.newTexMessage
            };
            if (newPost.messagePost.length === 0 || !newPost.messagePost.trim()) {
                return state;
            }else {
                return{
                    ...state,
                    newTexMessage: '',
                    postsData: [...state.postsData,newPost ]}
                }


        case 'UPDATE-POST-TEXT': {
            return{
                ...state,
                newTexMessage: action.postMessage}
        }
        default:
            return state;
    }
}


export default addPostReducer;



export const addPostChanger = () => ({type: ADD_POST})
export const onPostChangeChanger = (t) => ({type: UPDATE_POST_TEXT, postMessage: t})


//         if (action.type === ADD_POST) {
//             {
//                 let newPost = {
//                     name: 'Roma',
//                     messagePost: this._state.addPostPage.newTexMessage
//                 }
//
//                 if (newPost.messagePost.length === 0 || !newPost.messagePost.trim()) {
//                     this.rerenderEntireTree(this._state)
//                 } else {
//                     this._state.addPostPage.postsData.push(newPost)
//                     this.rerenderEntireTree(this._state)
//                 }
//                 this._state.addPostPage.newTexMessage = ''
//             }
//         } else if (action.type === UPDATE_POST_TEXT) {
//             {
//
//                 this._state.addPostPage.newTexMessage = action.postMessage;
//                 this.rerenderEntireTree(this._state)
//
//
//             }


/*

if (newPost.messagePost.length === 0 || !newPost.messagePost.trim()) {
    this.rerenderEntireTree(this._state)
} else {
    this._state.postsData.push(newPost)
    this.rerenderEntireTree(this._state)
}*/
