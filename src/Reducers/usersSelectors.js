import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersReducer.users;
};

export const getPageSCount = (state) => {
  return state.usersReducer.pageCount;
};

export const getTotalUsersCount = (state) => {
  return state.usersReducer.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersReducer.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersReducer.isFetching;
};
export const isFollowingInProgress = (state) => {
  return state.usersReducer.followingInProgress;
};
export const getIsAuth = (state) => {
  return state.authReducer.isAuth;
};
export const getUsersSuperSelect = createSelector(getUsers, (users) => {
  return users.filter(() => true);
});
