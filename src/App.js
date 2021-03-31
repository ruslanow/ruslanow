import './App.sass';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from "./components/Body/Body";

import {Route, BrowserRouter} from 'react-router-dom';
// import Post from "./components/Body/BodyComponents/Posts/Posts";


function App(props) {


    return (
        <BrowserRouter>
            <React.Fragment>
            <div id =  "main__intro">
                <Header />

                <Body  postsData={props.state.postsData} />

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
