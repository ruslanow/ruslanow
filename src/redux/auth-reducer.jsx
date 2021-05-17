import {AuthAPI} from "../api/api"
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_USER_DATA = 'auth/GET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

    isFetching: false
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
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


export const setAuthUserDataExecutor = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const setAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.setAuthUserData()
    if (response.data.resultCode === 0) {
        let {id, email, login,} = response.data.data
        dispatch(setAuthUserDataExecutor(id, email, login, true));
    }


}

export const login = (login, password, rememberMe) => async (dispatch) => {
    try {
        let response = await AuthAPI.login(login, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData())
        } else {
            let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    } catch (e) {
        console.error(e)
    }
}


export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataExecutor(null, null, null, false))
    }
}

export default authReducer;