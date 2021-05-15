import './App.sass';
import React, {Component} from 'react';
import Body from "./components/Body/Body";
import ChatContainer from "./components/Chat/ChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader/Preloader";


class App extends Component {


    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (

                <BrowserRouter>
                    <React.Fragment>

                        <div id="main__intro">

                            <Route path='/' render={() => <HeaderContainer/>}/>
                            <Route exact path='/friends' render={() => <UsersContainer store={this.props.store}/>}/>
                            <Route path='/chat' render={() => <ChatContainer store={this.props.store}/>}/>
                            <Route path='/profile/:userId' render={() => <ProfileContainer store={this.props.store}/>}/>
                            <Route exact path='/profile' render={() => <ProfileContainer store={this.props.store}/>}/>

                            <Route exact path={["/", "/all-announcement"]}
                                   render={() => <Body store={this.props.store}/>}/>

                            <Route exact path='/all-announcement' render={() => <footer/>}/>

                            <Route path='/login' render={() => <Login/>}/>

                        </div>

                    </React.Fragment>
                </BrowserRouter>
            )

        }
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);