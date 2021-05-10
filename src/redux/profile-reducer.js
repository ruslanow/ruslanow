import {ProfileAPI, UserAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {

            return {...state, profile: action.profile}

        }

        case UPDATE_STATUS: {
            return {...state, status: action.text }
        }

        default:  return state;
    }
}


const setUserProfileExecutor = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const updateStatusExecutor = (text) => ({type: UPDATE_STATUS, text })

export const getUserProfile = (userId) => (dispatch) => {
    UserAPI.setUserProfile(userId)
        .then(response => {
            dispatch(setUserProfileExecutor(response.data));
        });
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