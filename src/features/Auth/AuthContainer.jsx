import * as React from "react";
import Auth from "./Auth";
import { connect } from "react-redux";
import { setUserData } from "../../actions";

class AuthContainer extends React.Component {
  render() {
    return <Auth {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  const { authReducer } = state;
  return {
    isAuth: authReducer.isAuth,
    login: authReducer.login,
  };
};
export default connect(mapStateToProps, { setUserData })(AuthContainer);
