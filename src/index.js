import React from 'react';
import './index.scss';
import App from "./App";

import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
    <App store={store}/>, document.getElementById('root')
);

reportWebVitals();

