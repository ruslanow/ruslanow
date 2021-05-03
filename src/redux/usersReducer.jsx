import {UserAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE'
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    pageNumber: 1,
    totalCount: 100,
    isFetching: true,
    followInProgress: []
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            }
        }

        case TOGGLE_FOLLOW_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFollowing
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.count}
        }
        case SET_CURRENT_PAGE: {
            return {...state, pageNumber: action.pageNumber}
        }

        case IS_FETCHING_TOGGLE: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state;


    }
}

export const followSuccess = (usersId) => ({type: FOLLOW, usersId})

export const unfollowSuccess = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const isFetchingToggle = (isFetching) => ({type: IS_FETCHING_TOGGLE, isFetching})
export const isFollowingToggle = (isFollowing, userId) => ({type: TOGGLE_FOLLOW_PROGRESS, isFollowing, userId})

export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(isFetchingToggle(true));
        UserAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(isFetchingToggle(false));
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingToggle(true, userId));
        UserAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(isFollowingToggle(false, userId));
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingToggle(true, userId));
        UserAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(isFollowingToggle(false, userId));
            })
    }
}

export default usersReducer;
