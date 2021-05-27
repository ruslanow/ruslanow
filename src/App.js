import './App.sass';
import React, {Component} from 'react';
import Body from "./components/Body/Body";
import UsersContainer from "./components/Users/UsersContainer";
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";

const ChatContainer = React.lazy(() => import("./components/Chat/ChatContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


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
                            <Route path='/chat' render={withSuspense(ChatContainer)}/>
                            <Route path='/profile/:userId' render={withSuspense(ProfileContainer)} />
                            <Route exact path='/profile' render={withSuspense(ProfileContainer)} />

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

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


let MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer store={store}/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp