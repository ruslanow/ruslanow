import React from 'react';
import {connect} from "react-redux";
import './Users.module.sass';
import Users from "./Users";
import {
    follow, getUsers, isFetchingToggle,
    isFollowingToggle, unfollow
} from "../../redux/usersReducer";


class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.pageNumber, this.props.pageSize)
    }


    onPageChange = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {

        return <Users totalCount         = {this.props.totalCount}
                      pageSize           = {this.props.pageSize}
                      pageNumber         = {this.props.pageNumber}
                      users              = {this.props.users}
                      onPageChange       = {this.onPageChange}
                      follow             = {this.props.follow}
                      unfollow           = {this.props.unfollow}
                      isFetching         = {this.props.isFetching}
                      isFetchingToggle   = {this.props.isFetchingToggle}
                      followInProgress   = {this.props.followInProgress}
                      isFollowingToggle  = {this.props.isFollowingToggle}
        />
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        pageNumber: state.usersPage.pageNumber,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
    };
}

export default connect(mapStateToProps,{follow, unfollow, isFetchingToggle, isFollowingToggle, getUsers})(UsersContainer)

