const ADD_POST = 'ADD-POST'


let initialState = {
    postsData: [
        {name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
    ],
}


const addPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                name: 'Roma',
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


export const addPost = (postMessage) => ({type: ADD_POST, postMessage})

export default addPostReducer;
