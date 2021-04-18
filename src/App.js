import './App.sass';
import React from 'react';
import Header from './components/Header/Header';
import Body from "./components/Body/Body";
import SomePageContainer from "./components/Verstka/VerstkaContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Footer from './components/Footer/Footer';
import {Route, BrowserRouter} from 'react-router-dom';
function App(props) {

    return (
        <BrowserRouter>
            <React.Fragment>
            <div id =  "main__intro">
                <Header />
                <Route exact path='/podat-obyavlenie' render={ () =>
                    <UsersContainer store={props.store}/>}/>

                <Route path='/help' render={ () =>
                    <SomePageContainer store={props.store} />}/>

                <Route exact path={["/", "/all-announcement"]}  render={ () =>
                    <Body store={props.store}/>}/>

                <Route exact path='/help' render={ () => <footer />}/>
                <Route exact path='/all-announcement' render={ () => <footer />}/>
                <Route exact path='/search' render={ () => <footer />}/>
            </div>
            </React.Fragment>
        </BrowserRouter>
    )

}

export default App;
