import addPostReducer, {addPost} from "./addPostReducer";

let state = {
    postsData: [
        {name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
    ],
}
it("length of posts should be incremented", () => {
    let action = addPost('some text')
    let newState = addPostReducer(state, action)
    expect(newState.postsData.length).toBe(2)
})