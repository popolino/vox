import React from "react";
import {
  ADD_POST,
  CHANGE_STATUS,
  FOLLOW,
  HIDE_BUTTON,
  HIDE_EDIT,
  SELECT_CURRENT_PAGE,
  SET_COUNT_PAGE,
  INITIALIZED_SUCCESS,
  SET_NEXT_PAGE,
  SET_POST_TEXT,
  SET_PREVIOUS_PAGE,
  SET_STATUS,
  SET_TOTAL_USERS_COUNT,
  SET_USER_DATA,
  SET_USER_PROFILE,
  SET_USERS,
  SHOW_BUTTON,
  SHOW_EDIT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  UNFOLLOW,
  ADD_USER_IN_FRIENDS_ARRAY,
  SET_FRIENDS,
  SAVE_PHOTO_SUCCESS,
} from "./types";

export const showEdit = () => {
  return {
    type: SHOW_EDIT,
  };
};
export const hideEdit = () => {
  return {
    type: HIDE_EDIT,
  };
};
export const changeStatus = (input) => {
  return {
    type: CHANGE_STATUS,
    input,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const addPost = (newPost) => {
  return {
    type: ADD_POST,
    newPost,
  };
};
export const setPostText = (postText) => {
  return {
    type: SET_POST_TEXT,
    postText,
  };
};
export const showButton = () => {
  return {
    type: SHOW_BUTTON,
  };
};
export const hideButton = () => {
  return {
    type: HIDE_BUTTON,
  };
};
export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setFriends = (friends) => {
  return {
    type: SET_FRIENDS,
    friends,
  };
};
export const selectCurrentPage = (page) => {
  return {
    type: SELECT_CURRENT_PAGE,
    page,
  };
};
export const setCountPage = (count) => {
  return {
    type: SET_COUNT_PAGE,
    count,
  };
};
export const setUsersTotalCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};
export const setNextPage = () => {
  return {
    type: SET_NEXT_PAGE,
  };
};
export const setPreviousPage = () => {
  return {
    type: SET_PREVIOUS_PAGE,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    id,
    email,
    login,
    isAuth,
  };
};
export const setFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};
export const setInitializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};
export const addUserInFriendsArray = (user) => {
  return {
    type: ADD_USER_IN_FRIENDS_ARRAY,
    user,
  };
};
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};
