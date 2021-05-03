import addMessageReducer from "./addMessageReducer";
import addPostReducer from "./addPostReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk"

const {combineReducers} = require("redux");
const {createStore} = require("redux");


let reducers = combineReducers({
    addPostPage: addPostReducer,
    dialogsPage: addMessageReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store