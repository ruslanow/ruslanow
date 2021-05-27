import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus, saveData, savePhoto,
    updateStatus,
    updateStatusExecutor,
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    updateProfileInfo() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.updateProfileInfo()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.updateProfileInfo()
        }
    }

    render() {
        return <Profile {...this.props} savePhoto={this.props.savePhoto} profile={this.props.profile} isOwner={!this.props.match.params.userId} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
});


export default compose(
    connect(mapStateToProps, {getUserProfile, savePhoto, updateStatus, updateStatusExecutor, getUserStatus, saveData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
