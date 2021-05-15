import {AuthAPI} from "../api/api"
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA'
const GET_USER_DATA = 'GET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

    isFetching: false
}
const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }

        case GET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}


export const setAuthUserDataExecutor = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} })

export const setAuthUserData = () => (dispatch) => {
        return AuthAPI.setAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login,} = response.data.data
                    dispatch(setAuthUserDataExecutor(id, email, login, true));
                }
            });

}

export const login = (login, password, rememberMe) => (dispatch) => {
    AuthAPI.login(login, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserData())
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        } )
}



export const logout = () => (dispatch) => {
    AuthAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserDataExecutor(null, null, null, false))
            }
        } )
}

export default authReducer;