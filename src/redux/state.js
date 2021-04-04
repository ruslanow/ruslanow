let rerenderEntireTree = () => {
    console.log('sss')
}

let state = {
    postsData: [
        { name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
    ],
    newTexMessage: 'ad'

}


export const updatePostText = (postMessage) => {

    state.newTexMessage = postMessage;
    rerenderEntireTree(state)

}

function isBlank() {
    return (this.length === 0 || !this.trim());
}

export const addPost = () => {

    let newPost = {
        name: 'Roma',
        messagePost: state.newTexMessage
    }

    if (newPost.messagePost.length === 0 || !newPost.messagePost.trim()){
        rerenderEntireTree(state)
    }
    else{
        state.postsData.push(newPost)
        rerenderEntireTree(state)
    }
    state.newTexMessage = ''

}

export let subscribe = (observer) => {
    rerenderEntireTree  = observer;
}


export default state;