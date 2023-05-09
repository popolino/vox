import React from "react";
import classes from "./NavList.module.scss";
import { NavLinkComponent } from "./NavLinkComponent";
import { connect } from "react-redux";
import { logoutThunk } from "../../../../Reducers/AuthReducer";
import { Navigate } from "react-router";
import { initializeAppThunk } from "../../../../Reducers/AppReducer";

const NavList = (props) => {
  const onLogout = () => {
    props.logoutThunk();
  };
  if (!props.isAuth) return <Navigate to={"/auth/login"} />;

  return (
    <div className={classes.navigation}>
      <NavLinkComponent path="/friends" id="friends" section="Friends" />
      <NavLinkComponent path="/messenger" id="messenger" section="Messenger" />
      <NavLinkComponent
        path="/communities"
        id="communities"
        section="Communities"
      />
      <NavLinkComponent path="/music" id="music" section="Music" />
      <NavLinkComponent path="/videos" id="videos" section="Videos" />
      <NavLinkComponent path="/feed" id="feed" section="Feed" />
      <NavLinkComponent path="/settings" id="settings" section="Settings" />
      <NavLinkComponent
        path="/auth/login"
        id="logout"
        section="Logout"
        onLogout={onLogout}
      />
      {/*<button onClick={onLogout}>Logout</button>*/}
    </div>
  );
};
const mapStateToProps = (state) => {
  const { authReducer, appReducer } = state;
  return {
    isAuth: authReducer.isAuth,
    initialized: appReducer.initialized,
  };
};
export default connect(mapStateToProps, { logoutThunk, initializeAppThunk })(
  NavList
);
