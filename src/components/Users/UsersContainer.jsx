import React from 'react';
import {connect} from "react-redux";
import './Users.module.sass';
import Users from "./Users";
import {
    follow, isFetchingToggle,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";


class UsersContainer extends React.Component{

    componentDidMount() {

        this.props.isFetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.isFetchingToggle(false)
            })
    }


    onPageChange = (p) => {
        this.props.isFetchingToggle(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.isFetchingToggle(false)

            })
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
    };
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (usersId) => {
//             dispatch (followActionChanger(usersId))
//         },
//         unfollow: (usersId) => {
//             dispatch (unFollowActionChanger(usersId))
//         },
//         setUsers: (users) => {
//             dispatch (setUsers(users))
//         },
//
//         setTotalUsersCount: (totalCount) => {
//             dispatch (setTotalUsersCountAC(totalCount))
//         },
//
//         setCurrentPage: (pageNumber) => {
//             dispatch (setCurrentPageAC(pageNumber))
//         },
//         isFetchingToggle: (isFetching) => {
//             dispatch (isFetchingToggle(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,{follow, unfollow, setUsers, setTotalUsersCount,
    setCurrentPage, isFetchingToggle})(UsersContainer)

