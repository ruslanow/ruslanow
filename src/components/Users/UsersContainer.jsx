import React from 'react';
import {connect} from "react-redux";
import './Users.module.sass';
import Users from "./Users";
import {
    followActionChanger,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsers,
    unFollowActionChanger
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        pageNumber: state.usersPage.pageNumber,
        totalCount: state.usersPage.totalCount,
    };
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (usersId) => {
            dispatch (followActionChanger(usersId))
        },
        unfollow: (usersId) => {
            dispatch (unFollowActionChanger(usersId))
        },
        setUsers: (users) => {
            dispatch (setUsers(users))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch (setTotalUsersCountAC(totalCount))
        },

        setCurrentPage: (pageNumber) => {
            dispatch (setCurrentPageAC(pageNumber))
        }
    }
}

const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer