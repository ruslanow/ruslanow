import './App.sass';
import React from 'react';
import Body from "./components/Body/Body";
import ChatContainer from "./components/Verstka/VerstkaContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Route, BrowserRouter} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

    return (
        <BrowserRouter>
            <React.Fragment>

            <div id =  "main__intro">

                <HeaderContainer />

                <Route exact path='/friends' render={ () => <UsersContainer store={props.store}/>}/>
                <Route path='/help'          render={ () => <ChatContainer store={props.store} />}/>
                <Route path='/profile/:userId' render={ () => <ProfileContainer store={props.store} />}/>
                <Route exact path={["/", "/all-announcement"]}  render={ () => <Body store={props.store}/>}/>
                <Route exact path='/all-announcement' render={ () => <footer />}/>
                <Route exact path='/search' render={ () => <footer />}/>

            </div>

            </React.Fragment>
        </BrowserRouter>
    )

}

export default App;
