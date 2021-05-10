import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserData()
    }


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default compose(
    withRouter,
    connect(mapStateToProps, {setAuthUserData}),
)(HeaderContainer)

