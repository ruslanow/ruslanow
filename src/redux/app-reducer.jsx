import {setAuthUserData} from "./auth-reducer";
const SET_INITIALIZED_STATUS = 'SET_INITIALIZED_STATUS'


let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_INITIALIZED_STATUS: {
            return {
                ...state,
                initialized: true
            };
        }

        default:
            return state;
    }
}


export const setInitializedStatus = () => ({ type: SET_INITIALIZED_STATUS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(setAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedStatus());
        });
}



export default appReducer;