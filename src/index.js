import React from 'react';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import RenderEntireTree from "./rerenderEntireTree";
import state from "./redux/state";


RenderEntireTree(state);

reportWebVitals();
