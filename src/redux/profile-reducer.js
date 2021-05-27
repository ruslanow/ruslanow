import {ProfileAPI, UserAPI} from "../api/api";

const ADD_POST = 'profile-reducer/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile-reducer/UPDATE-NEW-POST-TEXT';
const UPDATE_STATUS = 'profile-reducer/UPDATE_STATUS';
const SAVE_PHOTO_EXECUTOR = 'profile-reducer/SAVE_PHOTO_EXECUTOR';
const SET_USER_PROFILE = 'profile-reducer/SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, name:'', message: 'It\'s my first post'},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case UPDATE_STATUS: {
            return {...state, status: action.text }
        }
        case SAVE_PHOTO_EXECUTOR: {
            return {...state, profile: {...state.profile, photos: action.photos} }
        }
        case ADD_POST:
            let newPost = {
                id: {...state.id + 1},
                name: action.name,
                message: action.message
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }



        default:  return state;
    }
}


const setUserProfileExecutor = (profile) => ({type: SET_USER_PROFILE, profile})
const savePhotoExecutor = (photos) => ({type: SAVE_PHOTO_EXECUTOR, photos})
export const addPostExecutor = (name, message) => ({type: ADD_POST, name, message})
export const updateStatusExecutor = (text) => ({type: UPDATE_STATUS, text })

export const addPost = (message) => (dispatch, getState) => {
    const name = getState().profilePage.profile.fullName
    dispatch(addPostExecutor(name, message))

}

export const getUserProfile = (userId) => (dispatch) => {
    UserAPI.setUserProfile(userId)
        .then(response => {
            dispatch(setUserProfileExecutor(response.data));
        });
}
export const savePhoto = (photos) => async (dispatch) => {
    let response = await ProfileAPI.savePhoto(photos)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoExecutor(response.data.data.photos));
    }
}
export const saveData = (data) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    console.log(userId)
    let response = await ProfileAPI.saveData(data)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}

export const getUserStatus = (userId) => (dispatch) => {

    ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(updateStatusExecutor(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
            dispatch(updateStatusExecutor(status))
            }
        })
    console.log("You use updateUserStatus-Thunk")
}

export default profileReducer;