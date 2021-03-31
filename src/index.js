import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';


let postsData = [
    { name: 'Nikola', messagePost: 'Hi, Bro! Its was really useful info'},
    { name: 'Viktor', messagePost: 'Yo Yo'},
    { name: 'Artem', messagePost: 'In touch!'},
    { name: 'Tesla', messagePost: 'You can do it'},
    { name: 'Michael', messagePost: 'Never give up!'},
    { name: 'Michael', messagePost: 'Never give up!'},
    { name: 'Michael', messagePost: 'Never give up!'},
    { name: 'Michael', messagePost: 'Never give up!'},
    { name: 'Michael', messagePost: 'Never give up!'},
    { name: 'Michael', messagePost: 'Never give up!'},
    { name: 'Michael', messagePost: 'Never give up!'},
    { name: 'Michael', messagePost: 'Never give up!'}
]




ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
