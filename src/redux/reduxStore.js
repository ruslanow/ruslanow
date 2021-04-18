import addMessageReducer from "./addMessageReducer";
import addPostReducer from "./addPostReducer";
import usersReducer from "./usersReducer";

const {combineReducers} = require("redux");
const {createStore} = require("redux");


let reducers = combineReducers({
    addPostPage: addPostReducer,
    dialogsPage: addMessageReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store