import './App.sass';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from "./components/Body/Body";

import {Route, BrowserRouter} from 'react-router-dom';
import Post from "./components/Body/BodyComponents/Posts";


function App() {

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

    return (
        <BrowserRouter>
            <React.Fragment>
            <div id =  "main__intro">

                <Route exact path='/' render={ () => <Header />}/>
                <Route exact path='/help' render={ () => <Header />}/>
                <Route exact path='/podat-obyavlenie' render={ () => <Header />}/>
                <Route exact path='/all-announcement' render={ () => <Header />}/>
                <Route exact path='/search' render={ () => <Header />}/>
                <Route exact path='/help' render={ () => <Header />}/>

                <Body  posts={postsData} />
                <div></div>
            </div>

            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;
