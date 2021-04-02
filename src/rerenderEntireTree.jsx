import ReactDOM from "react-dom";
import App from "./App";
import {addPost, updatePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let RenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

export default RenderEntireTree;