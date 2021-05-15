import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "14a1360f-d8f2-481e-8a79-2aa1a4ef9fc9"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

})

export const UserAPI = {
    getUsers(p, pageSize) {
        return instance.get(`users?page=${p}&count=${pageSize}`)
            .then (response => response.data) },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    setUserProfile(userId){
        console.warn('You use deprecated method. Use ProfileAPI.setUserProfile')
        return ProfileAPI.setUserProfile(userId)
    },
}


export const ProfileAPI = {

    setUserProfile(userId){
        return instance.get(`profile/${userId}`)
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },

    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },

}


export const AuthAPI = {
    setAuthUserData(){
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe=false){
        return instance.post('auth/login', {email, password, rememberMe})
    },


    logout(){
        return instance.delete('auth/login')
    }

}