import { ADD_POST, SET_STATUS } from "../types";
import store from "../state";
import avatar from "../img/avatar.jpg";
import cat from "../img/image 6.png";

const initialState = {
  status: "Learning React and Redux",
  postText: "",
  wallData: [
    {
      id: 1,
      username: "Polina As Fuck",
      avatar: avatar,
      online: "25 minutes ago",
      postComment: "Ivan Pashkin needs to find a job!",
      postPic: cat,
      likes: 2,
      comments: 0,
      reposts: 3,
    },
    {
      id: 2,
      username: "Polina As Fuck",
      avatar: avatar,
      online: "25 minutes ago",
      postComment: "Ivan Pashkin needs to find a job!",
      postPic: cat,
      likes: 2,
      comments: 0,
      reposts: 3,
    },
  ],
  showButton: [{ isActive: false }],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case "SET_POST_TEXT":
      return {
        ...state,
        postText: action.postText,
      };
    case ADD_POST:
      return {
        ...state,
        wallData: [
          ...state.wallData,
          {
            ...action.newPost,
            id: state.wallData[state.wallData.length - 1].id + 1,
          },
        ],
        postText: [...state.postText].filter(() => !state.postText),
      };
    case "SHOW_BUTTON":
      return {
        ...state,
        showButton: [...(state.showButton.isActive === true)],
      };
    default:
      return state;
  }
};
