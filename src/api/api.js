import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "2cc43c23-98fc-4e4e-83f6-44e29e8d10af",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageCount) {
    return instance.get(`users/?page=${currentPage}&count=${pageCount}`);
  },
  getFriends() {
    return instance.get(`users?friend=true`);
  },
  getUserProfile(userId) {
    console.warn("obsolete method. Please profileAPI object");
    return profileAPI.getUserProfile(userId);
  },
  postFollowUser(id) {
    return instance.post(`follow/${id}`);
  },
  deleteFollowUser(id) {
    return instance.delete(`follow/${id}`);
  },
};

export const authAPI = {
  getAuth() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false, captchaUrl = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captchaUrl,
    });
  },
  logout() {
    return instance.delete("auth/login");
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile/`, profile);
  },
};

export const securityAPI = {
  getCaptchaURL() {
    return instance.get("/security/get-captcha-url");
  },
};
