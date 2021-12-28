import * as axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "87f85abf-a9f8-4e38-843a-cebbb87516e9",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {});
  },

  getUser(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const profileAPI = {
  getProfileStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },

  updateProfileStatus(status) {
    return instance.put(`/profile/status`, { status });
  },
};

export const followAPI = {
  unfollowUser(id) {
    return instance.delete(`follow/${id}`);
  },

  followUser(id) {
    return instance.post(`follow/${id}`);
  },
};

export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`);
  },

  sendLoginRequest(formData) {
    return instance.post(`auth/login`, { ...formData });
  },

  sendLogOutRequest(){
    return instance.delete(`auth/login`)
  }
};
