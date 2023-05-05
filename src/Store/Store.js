import { combineReducers } from "redux";
import { profileReducer } from "../Reducers/ProfileReducer";
import { usersReducer } from "../Reducers/UsersReducer";
import { authReducer } from "../Reducers/AuthReducer";
import { reducer as formReducer } from "redux-form";
import { appReducer } from "../Reducers/AppReducer";

export const rootReducer = combineReducers({
  profileReducer,
  usersReducer,
  authReducer,
  appReducer,
  form: formReducer,
});
