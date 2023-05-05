import * as React from "react";
import AboutProfile from "./AboutProfile";
import { connect } from "react-redux";
import { setUserData } from "../../../../actions";

class AboutProfileContainer extends React.Component {
  render() {
    return (
      <AboutProfile
        {...this.props}
        login={this.props.login}
        email={this.props.email}
        isAuth={this.props.isAuth}
        id={this.props.id}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
    email: state.authReducer.email,
    id: state.authReducer.id,
  };
};

export default connect(mapStateToProps, { setUserData })(AboutProfileContainer);
