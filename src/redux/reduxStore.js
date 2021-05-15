import addMessageReducer from "./addMessageReducer";
import addPostReducer from "./addPostReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

const {combineReducers} = require("redux");
const {createStore} = require("redux");


let reducers = combineReducers({
    addPostPage: addPostReducer,
    dialogsPage: addMessageReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store