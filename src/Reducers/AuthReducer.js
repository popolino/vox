import { GET_CAPTCHA_URL, SET_USER_DATA } from "../types";
import { authAPI, securityAPI } from "../api/api";
import { getCaptchaUrlSuccess, setUserData } from "../actions";
import { stopSubmit } from "redux-form";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  rememberMe: false,
  captchaUrl: null,
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
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url,
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
  } else dispatch(getCaptchaThunk());
};
export const getCaptchaThunk = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaURL();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export const loginThunk =
  (email, password, rememberMe, captchaUrl) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captchaUrl);
    if (response.data.resultCode === 0) {
      dispatch(authThunk());
    } else {
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
