import './App.sass';
import React from 'react';
import Body from "./components/Body/Body";
import ChatContainer from "./components/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Route, BrowserRouter} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {

    return (
        <BrowserRouter>
            <React.Fragment>

            <div id =  "main__intro">

                <Route path='/' render={ () => <HeaderContainer />}/>
                <Route exact path='/friends' render={ () => <UsersContainer store={props.store}/>}/>
                <Route path='/chat' render={ () => <ChatContainer store={props.store} />}/>
                <Route path='/profile/:userId' render={ () => <ProfileContainer store={props.store} />}/>
                <Route exact path='/profile' render={ () => <ProfileContainer store={props.store} />}/>

                <Route exact path={["/", "/all-announcement"]}  render={ () => <Body store={props.store}/>}/>

                <Route exact path='/all-announcement' render={ () => <footer />}/>

                <Route path='/login' render={ () => <Login/>}/>

            </div>

            </React.Fragment>
        </BrowserRouter>
    )

}

export default App;
