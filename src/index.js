import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let RenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)
                 } store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


RenderEntireTree(store.getState());

reportWebVitals();

store.subscribe ( () => {
    let state = store.getState()
    RenderEntireTree(state)
});
