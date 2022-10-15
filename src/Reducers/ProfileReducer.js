import { SET_STATUS } from "../types";
import store from "../state";

const initialState = {
  status: "Learning React and Redux",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
