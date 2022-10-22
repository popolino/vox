import { combineReducers } from "redux";
import { SidebarFriendsReducer } from "../Reducers/SidebarFriendsReducer";
import { profileReducer } from "../Reducers/ProfileReducer";

export const rootReducer = combineReducers({
  profileReducer,
});
