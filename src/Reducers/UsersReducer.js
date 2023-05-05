import {
  FOLLOW,
  SELECT_CURRENT_PAGE,
  SET_COUNT_PAGE,
  SET_FRIENDS,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  UNFOLLOW,
} from "../types";
import { usersAPI } from "../api/api";
import {
  followSuccess,
  setFollowingProgress,
  setFriends,
  setIsFetching,
  setUsers,
  setUsersTotalCount,
  unfollowSuccess,
} from "../actions";

const initialState = {
  users: [],
  pageCount: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
  friends: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          } else return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          } else return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SELECT_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_COUNT_PAGE:
      return {
        ...state,
        pageCount: action.count,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case SET_PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id !== action.userId)],
      };
    case SET_FRIENDS:
      return {
        ...state,
        friends: [...action.friends],
      };
    default:
      return state;
  }
};

export const getUsersThunkCreator =
  (currentPage, pageCount) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageCount);
    dispatch(setIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setUsersTotalCount(response.data.totalCount));
  };
export const getFriendsThunk = () => async (dispatch) => {
  dispatch(setIsFetching(true));
  let response = await usersAPI.getFriends();
  dispatch(setFriends(response.data.items));
};
export const follow = (id) => async (dispatch) => {
  dispatch(setFollowingProgress(true, id));
  await usersAPI.postFollowUser(id);
  dispatch(followSuccess(id));
  dispatch(setFollowingProgress(false, id));
};
export const unfollow = (id) => async (dispatch) => {
  dispatch(setFollowingProgress(true, id));
  await usersAPI.deleteFollowUser(id);
  dispatch(unfollowSuccess(id));
  dispatch(setFollowingProgress(false, id));
};
