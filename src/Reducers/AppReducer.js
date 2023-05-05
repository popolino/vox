import { INITIALIZED_SUCCESS } from "../types";
import { setInitializedSuccess } from "../actions";
import { authThunk } from "./AuthReducer";

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializeAppThunk = () => (dispatch) => {
  let promise = dispatch(authThunk());
  Promise.all([promise]).then(() => {
    dispatch(setInitializedSuccess());
  });
};
