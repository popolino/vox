import React from "react";
import { ADD_POST, SET_STATUS } from "./types";

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
    type: "SET_POST_TEXT",
    postText,
  };
};
export const showButton = () => {
  return {
    type: "SHOW_BUTTON",
  };
};
