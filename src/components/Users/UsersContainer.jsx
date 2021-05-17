import React from 'react';
import {connect} from "react-redux";
import './Users.module.sass';
import Users from "./Users";
import {
    follow, getUsers, isFetchingToggle,
    isFollowingToggle, setCurrentPage, unfollow
} from "../../redux/usersReducer";
import {compose} from "redux";


class UsersContainer extends React.Component{

    componentDidMount() {
        const {pageNumber, pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }


    onPageChange = (p) => {
        const {pageSize} = this.props
        this.props.getUsers(p, pageSize)
        this.props.setCurrentPage(p)
    }

    render() {
        return <Users {...this.props} onPageChange = {this.onPageChange}/>
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


export default compose(
    connect(mapStateToProps,{follow, unfollow, isFetchingToggle, isFollowingToggle, setCurrentPage, getUsers})
)(UsersContainer)


