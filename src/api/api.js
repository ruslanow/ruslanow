import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "14a1360f-d8f2-481e-8a79-2aa1a4ef9fc9"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

})

export const UserAPI =  {
    getUsers(p, pageSize) {
        return instance.get(`users?page=${p}&count=${pageSize}`)
            .then (response => response.data) },


    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`) },

    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${userId}`)},
}

