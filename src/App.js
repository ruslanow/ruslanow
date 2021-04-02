import './App.sass';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from "./components/Body/Body";

import {Route, BrowserRouter} from 'react-router-dom';

function App(props) {

    debugger
    return (
        <BrowserRouter>
            <React.Fragment>
            <div id =  "main__intro">
                <Header />

                <Body  state={props.state}
                       updatePostText={props.updatePostText}
                       addPost = {props.addPost} />

                <Route exact path='/' render={ () => <footer />}/>
                <Route exact path='/help' render={ () => <footer />}/>
                <Route exact path='/podat-obyavlenie' render={ () => <footer />}/>
                <Route exact path='/all-announcement' render={ () => <footer />}/>
                <Route exact path='/search' render={ () => <footer />}/>
                <Route exact path='/help' render={ () => <footer />}/>
            </div>

            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;
