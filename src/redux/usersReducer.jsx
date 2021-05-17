import {UserAPI} from "../api/api";
import {updateObjectInArray} from "../utils/reducer-helpers/reducer-helpers";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const IS_FETCHING_TOGGLE = 'users/IS_FETCHING_TOGGLE'
const TOGGLE_FOLLOW_PROGRESS = 'users/TOGGLE_FOLLOW_PROGRESS'

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
                users: updateObjectInArray(state.users, action.usersId, 'id', {followed: true})
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.usersId, 'id', {followed: false})
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
    return async (dispatch) => {
        dispatch(isFetchingToggle(true));
        let data = await UserAPI.getUsers(pageNumber, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(isFetchingToggle(false));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod,actionCreator) => {
    dispatch(isFollowingToggle(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(isFollowingToggle(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, UserAPI.follow.bind(userId), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, UserAPI.unfollow.bind(userId), unfollowSuccess)
}

export default usersReducer;
