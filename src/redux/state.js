import rerenderEntireTree from "../rerenderEntireTree";


let state = {
    postsData: [
        { name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
    ],
    newTexMessage: 'ad'

}


export let addPost = (postMessage) => {

    let newPost = {
        name: 'Roma',
        messagePost: postMessage
    }

    state.postsData.push(newPost);
    rerenderEntireTree(state)

}

export let updatePostText = (postMessage) => {

    state.newTexMessage = postMessage;
    rerenderEntireTree(state)

}

export default state;