import * as axios from "axios";
import {AuthAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}
const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }

        default:
            return state;
    }
}


export const setAuthUserDataExecutor = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} })

export const setAuthUserData = () => {
    return (dispatch) => {
        AuthAPI.setAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data
                    dispatch( setAuthUserDataExecutor(id, email, login) );
                }
            });
    }
}

export default authReducer;