import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from "./components/Body/Body";

import {Route, BrowserRouter} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
            <div id =  "main__intro">

                <Route exact path='/' component={Header}/>
                <Route exact path='/help' component={Header}/>
                <Route exact path='/podat-obyavlenie' component={Header}/>
                <Route exact path='/all-announcement' component={Header}/>
                <Route exact path='/search' component={Header}/>
                <Route exact path='/help' component={Header}/>

                <Body />
                <Footer/>
            </div>

            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;
