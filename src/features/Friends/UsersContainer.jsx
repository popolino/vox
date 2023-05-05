import * as React from "react";
import {
  addUserInFriendsArray,
  selectCurrentPage,
  setCountPage,
  setFollowingProgress,
  setNextPage,
  setPreviousPage,
} from "../../actions";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../../components/Preloader/Preloader";
import {
  follow,
  getUsersThunkCreator,
  unfollow,
} from "../../Reducers/UsersReducer";
import { compose } from "redux";
import {
  getCurrentPage,
  getIsAuth,
  getIsFetching,
  getPageSCount,
  getTotalUsersCount,
  getUsersSuperSelect,
  isFollowingInProgress,
} from "../../Reducers/usersSelectors";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageCount);
  }
  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageCount);
  };
  onPageCountChanged = (count) => {
    this.props.getUsers(this.props.currentPage, count);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader className="preloader" /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          onPageCountChanged={this.onPageCountChanged}
          {...this.props}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelect(state),
    pageCount: getPageSCount(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isAuth: getIsAuth(state),
    followingInProgress: isFollowingInProgress(state),
    friendsArray: state.usersReducer.friendsArray,
  };
};
export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    selectCurrentPage,
    setNextPage,
    setPreviousPage,
    setCountPage,
    setFollowingProgress,
    getUsers: getUsersThunkCreator,
    addUserInFriendsArray,
  })
)(UsersAPIComponent);
