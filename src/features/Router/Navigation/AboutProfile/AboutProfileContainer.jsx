import * as React from "react";
import AboutProfile from "./AboutProfile";
import { connect } from "react-redux";
import { setUserData } from "../../../../actions";
import { getUserProfileThunk } from "../../../../Reducers/ProfileReducer";

class AboutProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunk(this.props.id);
  }
  render() {
    return (
      <div>
        <AboutProfile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    id: state.authReducer.id,
    profile: state.profileReducer.profile,
    initialized: state.appReducer.initialized,
  };
};

export default connect(mapStateToProps, { setUserData, getUserProfileThunk })(
  AboutProfileContainer
);
