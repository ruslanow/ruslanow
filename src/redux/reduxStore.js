import addMessageReducer from "./addMessageReducer";
import addPostReducer from "./addPostReducer";

const {combineReducers} = require("redux");
const {createStore} = require("redux");


let reducers = combineReducers({
    addPostPage: addPostReducer,
    dialogsPage: addMessageReducer
})

let store = createStore(reducers)



export default store