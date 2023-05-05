import {
  ADD_POST,
  CHANGE_STATUS,
  HIDE_BUTTON,
  HIDE_EDIT,
  SET_POST_TEXT,
  SET_STATUS,
  SET_USER_PROFILE,
  SHOW_BUTTON,
  SHOW_EDIT,
} from "../types";
import avatar from "../img/avatar.jpg";
import cat from "../img/image 6.png";
import me from "../img/pp.jpg";
import { setStatus, setUserProfile } from "../actions";
import { profileAPI, usersAPI } from "../api/api";

const initialState = {
  status: "",
  input: "",
  edit: false,
  postText: "",
  wallData: [
    {
      id: 1,
      username: "Polina As Fuck",
      avatar: avatar,
      online: "25 minutes ago",
      postComment: "I need to find a job to provide for a man...",
      postPic: me,
      likes: 2,
      comments: 0,
      reposts: 3,
    },
    {
      id: 2,
      username: "Polina As Fuck",
      avatar: avatar,
      online: "25.11.22",
      postComment: "Ivan Pashkin needs to find a job!",
      postPic: cat,
      likes: 2,
      comments: 0,
      reposts: 3,
    },
  ],
  button: false,
  profile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_EDIT:
      return {
        ...state,
        edit: (state.edit = true),
      };
    case HIDE_EDIT:
      return {
        ...state,
        edit: (state.edit = false),
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        input: action.input,
      };

    case SET_POST_TEXT:
      return {
        ...state,
        postText: action.postText,
      };
    case ADD_POST:
      return {
        ...state,
        wallData: [
          {
            ...action.newPost,
            id: state.wallData[state.wallData.length - 1].id + 1,
          },
          ...state.wallData,
        ],
      };
    case SHOW_BUTTON:
      return {
        ...state,
        button: (state.button = true),
      };
    case HIDE_BUTTON:
      return {
        ...state,
        button: (state.button = false),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const getUserProfileThunk = (id) => async (dispatch) => {
  let response = await usersAPI.getUserProfile(id);
  dispatch(setUserProfile(response.data));
};

export const getStatusThunk = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatusThunk = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) dispatch(setStatus(status));
};
