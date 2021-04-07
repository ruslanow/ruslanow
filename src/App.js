import './App.sass';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from "./components/Body/Body";
import {Route, BrowserRouter} from 'react-router-dom';
import SomePage from "./components/Verstka/Verstka";

function App(props) {

    return (
        <BrowserRouter>
            <React.Fragment>
            <div id =  "main__intro">

                <Header />

                <Route path='/help' render={ () => <SomePage state={props.state} dispatch={props.dispatch} />}/>


                <Body  state={props.state}
                        dispatch={props.dispatch} />


                <Route exact path='/help' render={ () => <footer />}/>
                <Route exact path='/podat-obyavlenie' render={ () => <footer />}/>
                <Route exact path='/all-announcement' render={ () => <footer />}/>
                <Route exact path='/search' render={ () => <footer />}/>
            </div>

            </React.Fragment>
        </BrowserRouter>
    )

}

export default App;
