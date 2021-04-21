const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_FETCHING_TOGGLE = 'IS_FETCHING_TOGGLE'

let initialState = {
    users: [],

    pageSize: 10,
    pageNumber: 1,
    totalCount: 100,
    isFetching: true

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
            return {...state, isFetching: action.isFetching }
        }

        default:
            return state;


    }
}

export default usersReducer;

export const follow             =    (usersId) => ({type: FOLLOW, usersId})
export const unfollow           =    (usersId) => ({type: UNFOLLOW, usersId})
export const setUsers           =      (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const setCurrentPage     = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const isFetchingToggle   = (isFetching) => ({type: IS_FETCHING_TOGGLE, isFetching})
