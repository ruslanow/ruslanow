const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


let initialState = {
    users: [],


    pageSize: 10,
    pageNumber: 3,
    totalCount: 10,

}


const usersReducer = (state = initialState, action) => {
    debugger
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
        default:
            return state;


    }
}

export default usersReducer;

export const followActionChanger   =    (usersId) => ({type: FOLLOW, usersId})
export const unFollowActionChanger =    (usersId) => ({type: UNFOLLOW, usersId})
export const setUsers              =      (users) => ({type: SET_USERS, users})
export const setTotalUsersCountAC  = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount})
export const setCurrentPageAC      = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
