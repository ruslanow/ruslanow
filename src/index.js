import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let RenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


RenderEntireTree(state);

reportWebVitals();

subscribe(RenderEntireTree);
