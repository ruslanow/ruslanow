import React from 'react';
import './index.scss';
import App from "./App";

import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";

import ReactDOM from "react-dom";



ReactDOM.render(
    <App store={store}/>, document.getElementById('root')
);

reportWebVitals();

