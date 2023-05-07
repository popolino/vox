import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { addPost, hideButton, setPostText, showButton } from "../../actions";
import {
  getStatusThunk,
  getUserProfileThunk,
  savePhoto,
  updateStatusThunk,
} from "../../Reducers/ProfileReducer";
import { compose } from "redux";
import { withRouter } from "../../App";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = +this.props.match.params.userId || this.props.id;
    userId && this.props.getUserProfileThunk(userId);
    userId && this.props.getStatusThunk(userId);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const currentUserId = +this.props.match.params.userId || this.props.id;
    const prevUserId = +prevProps.match.params.userId;
    if (!prevUserId) return;
    if (currentUserId !== prevUserId) {
      this.props.getStatusThunk(currentUserId);
      this.props.getUserProfileThunk(currentUserId);
    }
  }

  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  const { profileReducer, authReducer } = state;
  return {
    profile: profileReducer.profile,
    email: authReducer.email,
    login: authReducer.login,
    id: authReducer.id,
    isAuth: authReducer.isAuth,
    wallData: profileReducer.wallData,
    postText: profileReducer.postText,
    status: profileReducer.status,
    button: profileReducer.button,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    setPostText,
    updateStatusThunk,
    hideButton,
    showButton,
    getStatusThunk,
    getUserProfileThunk,
    savePhoto,
  }),
  withRouter
)(ProfileContainer);
