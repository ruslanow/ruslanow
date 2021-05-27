
const ADD_POST = 'posts-reducer/ADD-POST'


let initialState = {
    postsData: [
        {name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
    ],
    profile: null
}


const addPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: action.fullName,
                messagePost: action.postMessage
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }

        default:
            return state;
    }
}


export const addPost = (postMessage, fullName, photos) => ({type: ADD_POST, postMessage, fullName, photos})


export default addPostReducer;

