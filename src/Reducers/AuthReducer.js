import { SET_USER_DATA } from "../types";
import { authAPI } from "../api/api";
import { setUserData } from "../actions";
import { stopSubmit } from "redux-form";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  rememberMe: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        id: action.id,
        login: action.login,
        email: action.email,
        isAuth: action.isAuth,
        rememberMe: action.rememberMe,
      };

    default:
      return state;
  }
};

export const authThunk = () => async (dispatch) => {
  let response = await authAPI.getAuth();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setUserData(id, email, login, true));
  }
};
export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) dispatch(authThunk());
  else {
    const message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
export const logoutThunk = () => async (dispatch) => {
  await authAPI.logout();
  dispatch(setUserData(null, null, null, false));
};
