import addMessageReducer from "./addMessageReducer";
import addPostReducer from "./addPostReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import {applyMiddleware, compose} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));



export default store