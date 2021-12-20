import * as axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "06662ef7-3184-4288-8ff1-238788932969",
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
    return instance.put(`/profile/status`,  {status});
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
};
